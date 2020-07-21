<template>
  <DataTable :value="nodes" :paginator="true" :rows="5" :loading="loading">
    <Column header="">
      <template #body="node">
        <router-link to="/details">#{{ node.data.id }}</router-link>
      </template>
    </Column>
    <Column field="date" header="Date"></Column>
    <Column field="customer" header="Customer"></Column>
    <Column field="total" header="Total"></Column>
    <Column field="quantity" header="Quantity"></Column>
    <Column field="paymentStatus" header="Payment"></Column>
    <Column field="workMenuStatus" header="Work Menu Status"></Column>
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
