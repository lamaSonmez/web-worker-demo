import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-worker-demo',
  templateUrl: './web-worker-demo.component.html',
  styleUrls: ['./web-worker-demo.component.scss']
})
export class WebWorkerDemoComponent implements OnInit, OnDestroy {
  counter = 0;
  worker: Worker | null = null;
  loading = false;
  result: number | null = null;
  muliply:number=1;
  ngOnInit() {
    // Keep the counter running to show UI responsiveness
    setInterval(() => this.counter++, 100);

    
    // Initialize the Web Worker if supported
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('../sum.worker', import.meta.url), {
        type: 'module',
      });

      this.worker.onmessage = ({ data }) => {
        this.loading = false;
        this.result = data;
      };
      this.worker.onerror = (error) => {
        console.error('Worker error:', error);
        this.loading = false;
      };
    }
  }

  startHeavyComputation() {
    if (this.worker) {
      this.loading = true;
      this.result = null; // Reset previous result
      this.worker.postMessage(this.muliply * 1_000_000_000); // Perform a large summation
      this.muliply++;
    }
  }
  startHeavyComputationWithoutWorker() {
    this.loading = true;
    this.result = null; // Reset previous result

    // Performing heavy computation on the main thread
    this.result = this.calculateSum(this.muliply * 1_000_000_000);
    this.loading = false;
    this.muliply++;

  }

  calculateSum(limit: number): number {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
      sum += i;
    }
    return sum;
  }

  ngOnDestroy() {
    if (this.worker) {
      this.worker.terminate();
    }
  }
}