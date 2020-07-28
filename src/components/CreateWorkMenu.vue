<template>
  <div class="p-d-flex add-workmenu-item">
    <div class="p-field">
      <Dropdown
        :options="workMenuList"
        optionLabel="name"
        dataKey="id"
        v-model="workMenu"
        @change="emit"
        class="select-workmenu"
      />
    </div>

    <div
      class="p-field p-d-flex p-jc-between add-workmenu-control"
      v-if="workMenu"
    >
      <div class="input-content">
        <Textarea
          v-if="workMenu.allowComment"
          rows="3"
          cols="30"
          v-model="workMenu.comment"
          @input="emit"
          class="form-control"
        />
        <div class="upload-content">
          <FileUpload
            v-if="workMenu.attachFile"
            mode="basic"
            accept="image/*"
            name="file"
            :url="url"
            :auto="true"
            @select="myUploader"
            class="btn-primary"
          />
          <span class="file-name">{{
            (workMenu && workMenu.fileName) || ""
          }}</span>
        </div>
      </div>
      <Button
        icon="pi pi-minus"
        class="p-button-rounded p-button-text p-button-plain"
        @click="removeWorkMenu"
        v-if="!isFirst || (workMenu && workMenu.id)"
      />
    </div>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import FileUpload from "primevue/fileupload";
import Button from "primevue/button";

export default {
  name: "CreateWorkMenu",
  components: { Dropdown, Textarea, FileUpload, Button },
  props: ["selectedWorkMenu", "isFirst"],
  model: {
    prop: "selectedWorkMenu",
    event: "input"
  },
  data: () => ({
    workMenu: null,
    file: "",
    fileName: "",
    url: "https://api.ftd-dev.nals.vn/ftd-order/api/v1/files/upload",
    workMenuList: [
      {
        id: 1,
        name: "飾り",
        allowComment: true,
        attachFile: true,
        fileName: "",
        comment: ""
      },
      {
        id: 2,
        name: "ミニ袋入れ",
        allowComment: true,
        attachFile: true,
        fileName: "",
        comment: ""
      }
    ]
  }),
  created() {
    this.workMenu = { ...this.selectedWorkMenu };
  },
  methods: {
    myUploader(event) {
      this.workMenu.fileName = event.files[0].name;
      this.emit();
    },
    emit() {
      setTimeout(() => this.$emit("input", { ...this.workMenu }));
    },
    removeWorkMenu() {
      this.$emit("removeWorkMenu");
    }
  }
};
</script>

<style scoped></style>
