<template>
  <div>
    <div class="p-d-flex p-ai-center p-my-3">
      <div class="image-container p-mr-3">
        <div class="image">
          <img :src="src" />
        </div>
      </div>
      <div class="item-info">
        <div class="item-container p-d-flex p-jc-between p-ai-center">
          <div class="item-name p-grid p-ai-center p-md-jc-between p-mt-0">
            <div class="info p-col-12 p-md-9">
              <p class="p-my-0">{{ name }}</p>
              <small>{{ attributes.join(" / ") }}</small>
            </div>
            <div class="quantity p-col-12 p-md-3">
              {{ quantity }} x {{ price }} 円
            </div>
          </div>
          <div class="item-total">
            <div class="price">{{ quantity * price }} 円</div>
          </div>
        </div>
      </div>
    </div>

    <hr v-if="!last" />
  </div>
</template>

<script>
export default {
  name: "OrderItem",
  props: {
    src: String,
    quantity: Number,
    price: Number,
    attributes: Array,
    last: Boolean,
    name: String
  }
};
</script>

<style scoped lang="scss">
.image-container {
  min-width: 0;
  max-width: 100%;
  flex: 0 0 auto;

  .image {
    width: 4rem;
    flex-shrink: 0;
    flex-grow: 0;
  }
}

.item-info {
  min-width: 0;
  max-width: 100%;
  flex: 1 1 auto;

  .item-name {
    max-width: 100%;
    flex: 1 1 auto;
  }

  .item-total {
    flex-grow: 0;
    margin-left: 2rem;
    text-align: right;
  }
}

hr {
  color: #e6e6e6;
  background-color: #e6e6e6;
  height: 1px;
  padding: 0;
  border: 0;
}
</style>
