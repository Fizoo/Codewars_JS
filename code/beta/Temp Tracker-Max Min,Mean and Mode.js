function TempTracker() {
    this.insert = function(t) {
        this.max = this.max ? Math.max(t, this.max) : t;
        this.min = this.min ? Math.min(t, this.min) : t;
        this.sum = (this.sum || 0) + t;
        this.count = (this.count || 0) + 1;
        this[t] = (this[t] || 0) + 1;
        if (!this.mode || this[t] > this[this.mode]) this.mode = t;
    };
    this.getMax = function() { return this.max || null; };
    this.getMin = function() { return this.min || null; };
    this.getMean = function() { return this.sum / this.count || null; };
    this.getMode = function() { return this.mode || null; }
}






