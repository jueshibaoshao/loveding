<template>
  <div class="buycar">
    <ul>
      <li>
        <img :src="good1" />
        <p>
          {{ price[0] }}<span class="first" @click="reduce(0)">-</span
          ><span>{{ count[0] }}</span
          ><span @click="add(0)">+</span>
        </p>
      </li>
      <li>
        <img :src="good2" />
        <p>
          {{ price[1] }}<span class="first" @click="reduce(1)">-</span
          ><span>{{ count[1] }}</span
          ><span @click="add(1)">+</span>
        </p>
      </li>
      <li>
        <img :src="good3" />
        <p>
          {{ price[2] }}<span class="first" @click="reduce(2)">-</span
          ><span>{{ count[2] }}</span
          ><span @click="add(2)">+</span>
        </p>
      </li>
      <li>
        <span>{{ total }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "buy-car",
  data() {
    return {
      price: [10, 100, 1000],
      count: [0, 0, 0],
      total: 0,
      good1: require("../assets/logo.png"),
      good2: require("../assets/star.jpg"),
      good3: require("../assets/star2.jpg"),
    };
  },
  methods: {
    reduce(i) {
      if (this.count[i] > 0) {
        this.$set(this.count, i, this.count[i] - 1);
        this.total = this.total - this.price[i];
      }
    },
    add(i) {
      if (this.count[i] < 5) {
        this.$set(this.count, i, this.count[i] + 1);
        this.total = this.total + this.price[i];
      }
    },
  },
};
</script>

<style>
.buycar ul {
  list-style: none;
}
.buycar ul li {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.buycar ul li img {
  width: 100px;
  height: 100px;
  float: left;
  /* margin-top: 80px; */
}
.buycar ul li p {
  font-size: 20px;
  float: right;
}
.buycar ul li span {
  display: inline-block;
  font-size: 30px;
}
.first {
  padding-left: 100px;
}
</style>