<template>
  <div class="p-grid">
    <div class="p-col">
      <Button
        icon="pi pi-chevron-left"
        label="Orders"
        class="p-button-text p-pl-0"
        @click="goToList"
      />

      <div class="p-d-flex p-align-baseline">
        <h2 class="p-my-0">#10001</h2>
        <span>2020/07/17 10:00 am</span>
      </div>

      <div class="actions">
        <Button
          icon="pi pi-print"
          label="Print"
          class="p-button-text p-button-secondary p-pl-0"
        />
        <Button
          icon="pi pi-pencil"
          label="Edit"
          class="p-button-text p-button-secondary p-pl-0"
        />
        <Button
          icon="pi pi-copy"
          label="Duplicate"
          class="p-button-text p-button-secondary p-pl-0"
        />
        <Button
          icon="pi pi-times"
          label="Cancel order"
          class="p-button-text p-button-secondary p-pl-0"
        />
      </div>

      <div class="p-grid">
        <div class="p-col-12 p-md-8">
          <Card class="p-mb-3">
            <template slot="title">
              List items (2)
            </template>
            <template slot="content">
              <OrderItem
                v-for="(item, index) in items"
                :key="item.id"
                v-bind="item"
                :last="index === items.length - 1"
              />
            </template>
          </Card>

          <Card class="p-mb-3">
            <template slot="title">
              Paid
            </template>
            <template slot="content">
              <ul>
                <li>
                  <label>Subtotal</label>
                  <span> 40 円 </span>
                </li>
                <li>
                  <label>Tax</label>
                  <span> 4 円 </span>
                </li>
                <li>
                  <label>Total</label>
                  <span> 44 円 </span>
                </li>
                <hr />
                <li>
                  <label>Paid by customer</label>
                  <span> 44 円 </span>
                </li>
              </ul>
            </template>
          </Card>

          <div class="timeline">
            <h3>Timeline</h3>
            <Timeline
              :timeline-items="dataTimeline"
              :message-when-no-items="messageWhenNoItems"
              :unique-year="true"
              :show-day-and-month="true"
              order="desc"
            />
          </div>
        </div>

        <div class="p-col-12 p-md-4">
          <Card class="p-mb-6">
            <template slot="title">
              <div class="p-d-flex p-jc-between">
                Notes
                <Button label="Edit" class="p-button-link" />
              </div>
            </template>
            <template slot="content">
              Notes from customer
            </template>
          </Card>

          <Card class="p-mb-1">
            <template slot="title">
              Customer
            </template>
            <template slot="content">
              Customer Name
            </template>
          </Card>

          <Card class="p-mb-1">
            <template slot="title">
              <div class="p-d-flex p-jc-between">
                Contact information
                <Button label="Edit" class="p-button-link" />
              </div>
            </template>
            <template slot="content">
              <p>Email Address</p>
              <p>Phone number</p>
            </template>
          </Card>

          <Card>
            <template slot="title">
              <div class="p-d-flex p-jc-between">
                Shipping address
                <Button label="Edit" class="p-button-link" />
              </div>
            </template>
            <template slot="content">
              <p>16 Ly Thuong Kiet, Hai Chau District, Da Nang</p>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import Card from "primevue/card";
import OrderItem from "@/components/OrderItem";
import Timeline from "timeline-vuejs";

import router from "@/router";

export default {
  name: "Details",
  components: { OrderItem, Button, Card, Timeline },
  data: () => ({
    items: [
      {
        id: 1,
        name: "Shirt",
        attributes: ["L", "Red"],
        quantity: 2,
        price: 10,
        src:
          "http://gd4.alicdn.com/imgextra/i1/0/O1CN01Fiy0n82IrlrW1HlEz_!!0-item_pic.jpg"
      },
      {
        id: 2,
        name: "Shirt",
        attributes: ["M", "Red"],
        quantity: 2,
        price: 10,
        src:
          "http://gd4.alicdn.com/imgextra/i1/0/O1CN01Fiy0n82IrlrW1HlEz_!!0-item_pic.jpg"
      }
    ],
    messageWhenNoItems: "There arent items",
    dataTimeline: [
      {
        from: new Date(2020, 7, 10),
        description: "You added a shipping address to this order.",
        showDayAndMonth: true
      },
      {
        from: new Date(2020, 7, 9),
        description: "You manually marked this order as paid."
      },
      {
        from: new Date(2020, 7, 8),
        description: "You created order"
      }
    ]
  }),
  methods: {
    goToList() {
      router.push("/");
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  padding-left: 0;

  li {
    display: flex;
    justify-content: space-between;
  }
}

.p-card-title {
  font-size: 1rem;
}
</style>
