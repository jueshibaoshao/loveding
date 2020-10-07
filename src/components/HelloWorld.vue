<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="star-off">
      <p
        v-for="(item, index) in star"
        :key="index"
        @click="comment(index)"
        :class="star[index] ? 'a' : 'b'"
      >
        {}
      </p>
    </div>
    <button @click="go"></button>
    <buy></buy>
  </div>
</template>

<script>
import buy from "../components/test";
export default {
  name: "star",
  components: {
    buy,
  },
  data() {
    return {
      star: [],
      person: {
        name,
      },
    };
  },
  methods: {
    go() {
      this.$router.push({ path: "/test" });
    },
    comment(i) {
      let c = this.star[i] ? false : true;
      for (let j = 0; j <= i; j++) {
        this.$set(this.star, j, true);
      }
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .star-off {
  display: flex;
} */
.b {
  /* flex: 1; */
  background: url(../assets/star.jpg) no-repeat;
  background-size: 100% 100%;
  vertical-align: 0px;
  cursor: pointer;
  display: inline-block;
  margin: 0 0px;
  width: 19px;
  height: 19px;
}
.a {
  flex: 1;
  background: url(../assets/star2.jpg) no-repeat;
  background-size: 100% 100%;
  vertical-align: 0px;
  cursor: pointer;
  display: inline-block;
  margin: 0 0px;
  width: 19px;
  height: 19px;
}
</style>
