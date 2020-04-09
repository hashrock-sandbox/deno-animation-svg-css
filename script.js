Vue.component("foot", {
  template: "#foot",
  props: ["angle", "x", "y", "front"],
  computed: {
    t1() {
      return `translate(${this.x}, ${this.y}) rotate(${this.angle})`;
    }
  }
});
const amp = 10;

Vue.component("deno", {
  template: "#deno",
  props: ["init"],
  data() {
    return {
      d: 0
    };
  },
  computed: {
    f1() {
      return Math.sin(this.d / 2 / 3.14) * amp;
    },
    f2() {
      return Math.sin(this.d / 2 / 3.14 + 3.14 + 1) * amp;
    },
    f3() {
      return Math.sin(this.d / 2 / 3.14 + 1) * amp;
    },
    f4() {
      return Math.sin(this.d / 2 / 3.14 + 3.14) * amp;
    },
    z() {
      return -Math.abs(Math.sin(this.d / 2 / 3.14) * amp);
    },
    x() {
      return Math.sin(this.d / 4 / 3.14) * 20;
    },
    t() {
      return `translate(${this.x},${this.z})`;
    }
  },
  mounted() {
    this.d = this.init ? this.init : 0;
    setInterval(() => {
      this.d += 1;
    }, 20);
  }
});

new Vue({
  el: "#app",
  data: {
    t: 0,
    letters: ["L", "O", "A", "D", "I", "N", "G"]
  },
  methods: {
    y(rad) {
      return Math.sin((rad * 10 + this.t) * 0.03 * 3.14) * 10;
    }
  },
  mounted() {
    setInterval(() => {
      this.t += 1;
    }, 20);
  }
});
