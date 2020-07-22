<template>
  <div>
    <div class="offset-container">
      <label class="p-mr-1">表示件数:</label>
      <Dropdown v-model="offset" :options="offsets" optionLabel="label" />
    </div>
    <DataTable
      :value="nodes"
      :paginator="true"
      :rows="5"
      :loading="loading"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
    >
      <Column header="">
        <template #body="node"
          ><a href="javascript:void(0)">#{{ node.data.id }}</a>
        </template>
      </Column>
      <Column field="date" header="受注日"></Column>
      <Column field="quantity" header="数量"></Column>
      <Column header="作業">
        <template #body="node">
          <ul>
            <li v-for="workMenu in node.data.workMenus" :key="workMenu.id">
              <label>{{ workMenu.name }}:</label>
              <span> {{ workMenu.implementedQuantity }} </span>
            </li>
          </ul>
        </template>
      </Column>
      <template #paginatorLeft>
        表示件数 3 件
      </template>
    </DataTable>
  </div>
</template>

<script>
import NodeService from "@/services/NodeService";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Dropdown from "primevue/dropdown";

export default {
  name: "WorkMenuList",
  components: { DataTable, Column, Dropdown },
  data() {
    return {
      show: true,
      nodes: null,
      offset: null,
      offsets: [
        { label: "10 件", value: 10 },
        { label: "20 件", value: 20 },
        { label: "50 件", value: 50 }
      ],
      loading: true
    };
  },
  nodeService: null,
  created() {
    this.offset = this.offsets[0];
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
