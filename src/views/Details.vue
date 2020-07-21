<template>
  <ValidationObserver v-slot="{ invalid }" class="p-d-flex p-flex-column">
    <form @submit.prevent="onSubmit" class="p-fluid p-formgrid p-grid">
      <div class="p-field p-col-12 p-md-6">
        <div class="p-field">
          <label for="orderItemNo">Order Item No</label>
          <InputText
            id="orderItemNo"
            v-model="orderItemNo"
            type="text"
            disabled
          />
        </div>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <div class="p-field">
          <label for="imageUrl">Image</label>
          <InputText id="imageUrl" v-model="imageUrl" type="text" />
        </div>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <ValidationProvider name="url" rules="required" v-slot="{ errors }">
          <div class="p-field">
            <label for="url">Url</label>
            <InputText
              id="url"
              v-model="url"
              type="text"
              :class="{ 'p-invalid': errors[0] }"
            />
            <small class="p-invalid">{{ errors[0] }}</small>
          </div>
        </ValidationProvider>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <ValidationProvider
          name="purchaseQuantity"
          rules="required"
          v-slot="{ errors }"
        >
          <div class="p-field">
            <label for="purchaseQuantity">Purchase Quantity</label>
            <InputText
              id="purchaseQuantity"
              v-model="purchaseQuantity"
              type="number"
              :class="{ 'p-invalid': errors[0] }"
            />
            <small class="p-invalid">{{ errors[0] }}</small>
          </div>
        </ValidationProvider>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <ValidationProvider
          name="unitPrice"
          rules="required"
          v-slot="{ errors }"
        >
          <div class="p-field">
            <label for="unitPrice">Unit Price</label>
            <InputText
              id="unitPrice"
              v-model="unitPrice"
              type="number"
              :class="{ 'p-invalid': errors[0] }"
            />
            <small class="p-invalid">{{ errors[0] }}</small>
          </div>
        </ValidationProvider>
      </div>
      <div class="p-field p-col-12 p-md-6">
        <ValidationProvider
          name="chinaDeliveryFee"
          rules="required"
          v-slot="{ errors }"
        >
          <div class="p-field">
            <label for="chinaDeliveryFee">China Delivery Fee</label>
            <InputText
              id="chinaDeliveryFee"
              v-model="chinaDeliveryFee"
              type="number"
              :class="{ 'p-invalid': errors[0] }"
            />
            <small class="p-invalid">{{ errors[0] }}</small>
          </div>
        </ValidationProvider>
      </div>
      <div class="p-field p-col-12">
        <div class="p-field">
          <label for="note">Note</label>
          <Textarea id="note" v-model="note" :autoResize="true" rows="5" />
        </div>
      </div>
    </form>
    <div class="p-d-flex p-jc-end">
      <Button
        class="p-button-raised p-button-text p-button-plain p-mr-2"
        label="Cancel"
        type="button"
        @click="goToList"
      />
      <Button
        class="p-button-raised"
        label="Submit"
        :disabled="invalid"
        type="button"
        @click="onSubmit"
      />
    </div>
  </ValidationObserver>
</template>

<script>
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import router from "@/router";

export default {
  name: "Details",
  components: { InputText, Textarea, Button },
  data: () => ({
    orderItemNo: "CL00001-200715005-001",
    url:
      "https://item.taobao.com/item.htm?spm=a21bo.7929913.198967.15.1846417487NOuA&id=564064938812",
    purchaseQuantity: "10",
    unitPrice: "21",
    chinaDeliveryFee: "100",
    note: "This is a note",
    imageUrl:
      "http://gd4.alicdn.com/imgextra/i1/0/O1CN01Fiy0n82IrlrW1HlEz_!!0-item_pic.jpg"
  }),
  methods: {
    onSubmit() {
      this.$toast.add({
        severity: "success",
        life: 3000,
        summary: "Update successfully"
      });
    },
    goToList() {
      router.push("/");
    }
  }
};
</script>

<style scoped></style>
