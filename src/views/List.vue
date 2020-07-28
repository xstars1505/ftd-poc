<template>
  <div class="dashboard-content">
    <div class="p-d-flex p-jc-between p-ai-center">
      <div class="offset-container">
        <label class="p-mr-2 tx-label p-mb-0">表示件数:</label>
        <Dropdown v-model="offset" :options="offsets" optionLabel="label" />
      </div>
      <div class="create-order-button">
        <Button
          label="Create Order"
          class="btn-primary"
          icon="pi pi-plus"
          @click="createOrder()"
        />
      </div>
    </div>
    <DataTable
      :value="nodes"
      :rows="5"
      :loading="loading"
      :paginator="true"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
      class="table-default"
    >
      <Column header="">
        <template #body="node">
          <router-link to="/details">#{{ node.data.id }}</router-link>
        </template>
      </Column>
      <Column field="date" header="日時"></Column>
      <Column field="customer" header="ユーザー"></Column>
      <Column field="total" header="合計"></Column>
      <Column field="quantity" header="数量"></Column>
      <Column field="paymentStatus" header="請求状態"></Column>
      <Column field="workMenuStatus" header="作業状態"></Column>
      <template #paginatorLeft>
        表示件数 3 件
      </template>
    </DataTable>
  </div>
</template>

<script>
import router from "@/router";
import NodeService from "@/services/NodeService";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";

export default {
  name: "List",
  components: { DataTable, Column, Dropdown, Button },
  data() {
    return {
      show: true,
      nodes: null,
      loading: true,
      selectedKeys3: null,
      offset: null,
      offsets: [
        { label: "10 件", value: 10 },
        { label: "20 件", value: 20 },
        { label: "50 件", value: 50 }
      ],
      selectedNodes: []
    };
  },
  nodeService: null,
  created() {
    this.offset = this.offsets[0];
    this.nodeService = new NodeService();
  },
  mounted() {
    this.nodeService.getTreeTableNodes().then(data =>
      setTimeout(() => {
        this.loading = false;
        this.nodes = data;
      }, 1000)
    );
  },
  methods: {
    createOrder() {
      router.push("/create-order");
    }
  }
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/pages/dashboard.scss";
</style>
