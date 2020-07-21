<template>
  <DataTable :value="nodes" :paginator="true" :rows="5" :loading="loading">
    <Column header="">
      <template #body="node"> #{{ node.data.id }} </template>
    </Column>
    <Column field="date" header="Date"></Column>
    <Column field="quantity" header="Quantity"></Column>
    <Column header="Work Menu">
      <template #body="node">
        <ul>
          <li v-for="workMenu in node.data.workMenus" :key="workMenu.id">
            <label>{{ workMenu.name }}:</label>
            <span> {{ workMenu.implementedQuantity }} </span>
          </li>
        </ul>
      </template>
    </Column>
  </DataTable>
</template>

<script>
import NodeService from "@/services/NodeService";
import Column from "primevue/column";
import DataTable from "primevue/datatable";

export default {
  name: "WorkMenuList",
  components: { DataTable, Column },
  data() {
    return {
      show: true,
      nodes: null,
      loading: true
    };
  },
  nodeService: null,
  created() {
    this.nodeService = new NodeService();
  },
  mounted() {
    this.nodeService.getWorkMenuList().then(data =>
      setTimeout(() => {
        this.loading = false;
        this.nodes = data;
      }, 1000)
    );
  }
};
</script>

<style scoped lang="scss">
@import "./src/assets/scss/pages/dashboard.scss";
ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
  }

  label {
    margin-right: 10px;
    margin-bottom: 0;
  }
}
</style>
