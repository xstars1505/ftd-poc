<template>
  <div class="p-grid">
    <div class="p-col">
      <Button
        icon="pi pi-chevron-left"
        label="注文"
        class="p-button-text p-pl-0"
        @click="goToList"
      />

      <div class="p-d-flex p-align-baseline">
        <h2 class="p-my-0 p-pr-2">#10001</h2>
        <span>2020/07/17 10:00 午前</span>
      </div>

      <div class="actions">
        <Button
          icon="pi pi-print"
          label="プリント"
          class="p-button-text p-button-secondary p-pl-0 p-button-sm"
        />
        <Button
          icon="pi pi-pencil"
          label="編集"
          class="p-button-text p-button-secondary p-pl-0 p-button-sm"
        />
        <Button
          icon="pi pi-copy"
          label="複製"
          class="p-button-text p-button-secondary p-pl-0 p-button-sm"
        />
        <Button
          icon="pi pi-times"
          label="注文削除"
          class="p-button-text p-button-secondary p-pl-0 p-button-sm"
        />
      </div>

      <div class="p-grid">
        <div class="p-col-12 p-md-8">
          <Card class="p-mb-3">
            <template slot="title">
              商品削除 (2)
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
              支払い済
            </template>
            <template slot="content">
              <ul>
                <li>
                  <label>小計</label>
                  <span> 40 円 </span>
                </li>
                <li>
                  <label>税</label>
                  <span> 4 円 </span>
                </li>
                <li>
                  <label>合計</label>
                  <span> 44 円 </span>
                </li>
                <hr />
                <li>
                  <label>お客様支払い済</label>
                  <span> 44 円 </span>
                </li>
              </ul>
            </template>
          </Card>

          <div class="timeline">
            <p class="timeline-title">タイムライン</p>
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
                メモ
                <Button label="編集" class="p-button-link" />
              </div>
            </template>
            <template slot="content">
              お客様からのメモはありません
            </template>
          </Card>

          <Card class="p-mb-1">
            <template slot="title">
              お客様
            </template>
            <template slot="content">
              お客様なし
            </template>
          </Card>

          <Card class="p-mb-1">
            <template slot="title">
              <div class="p-d-flex p-jc-between">
                連絡先情報
                <Button label="編集" class="p-button-link" />
              </div>
            </template>
            <template slot="content">
              <p>メールアドレスはありません</p>
              <p>電話番号はありません</p>
            </template>
          </Card>

          <Card>
            <template slot="title">
              <div class="p-d-flex p-jc-between">
                配送先住所
                <Button label="編集" class="p-button-link" />
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
        from: new Date(2020, 6, 10),
        description: "この注文に配送先住所を追加しました。",
        showDayAndMonth: true
      },
      {
        from: new Date(2020, 6, 9),
        description: "手動でこの注文を支払い済としてマークしました。",
        showDayAndMonth: true
      },
      {
        from: new Date(2020, 6, 8),
        description: "この注文を下書き注文#D1から作成しました。",
        showDayAndMonth: true
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
.timeline-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>
