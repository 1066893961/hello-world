export const mixin = {
  methods: {
    showName() {
      alert(this.name);
    },
  },
  mounted() {
    console.log("mounted");
  },
};
/* mixin 混入  方法的封装 */

export var mixin2 = {
    data() {
        return {
            x:100,
            y:200
        }
    },
};
