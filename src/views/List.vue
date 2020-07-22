<template>
  <DataTable :value="nodes" :paginator="true" :rows="5" :loading="loading">
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
  </DataTable>
</template>

<script>
import router from "@/router";
import NodeService from "@/services/NodeService";
import Column from "primevue/column";
import DataTable from "primevue/datatable";

export default {
  name: "List",
  components: { DataTable, Column },
  data() {
    return {
      show: true,
      nodes: null,
      loading: true,
      selectedKeys3: null,
      selectedNodes: []
    };
  },
  nodeService: null,
  created() {
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
    goToDetail() {
      router.push("/details");
    },
    test: function(a) {
      console.log(a);
    }
  }
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/pages/dashboard.scss";
img {
  width: 100%;
  height: auto;
}
ul {
  padding-left: 0;
  list-style: none;

  label {
    margin-right: 10px;
  }
}
</style>
