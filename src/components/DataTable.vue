<template>
  <div>
    <!-- Controls Bar - Search on right, pagination on left -->
    <div v-if="showSearch && !isLocalData" class="mb-4 flex justify-between items-center">
      <!-- Pagination Dropdown - Left side -->
      <div class="flex items-center relative">
        <Dropdown
          v-model="selectedPageSize"
          :items="pageSizeOptions"
          :trigger-small="true"
          class="w-20"
        />
      </div>

      <!-- Search Bar - Right side -->
      <div class="relative w-64">
        <FormInput
          v-model="searchQuery"
          label=""
          id="table-search"
          name="table-search"
          :placeholder="searchPlaceholder"
          :left-icon="IconSearch"
          small
          :disabled="isSearching"
        />
        <!-- Loading indicator -->
        <div
          v-if="isSearching"
          class="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <div
            class="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-subtle-light dark:border-primary-subtle-dark"
          ></div>
        </div>
      </div>
    </div>

    <!-- Desktop Table View -->
    <div v-if="!isSmallMobile" class="overflow-x-auto min-w-full">
      <table
        class="min-w-full divide-y divide-default-light dark:divide-default-dark"
        :style="{
          width: tableWidth,
          tableLayout: useFixedLayout ? 'fixed' : 'auto',
        }"
      >
        <!-- Table Header -->
        <TableHeader
          :columns="props.columns"
          :show-actions="hasActionsSlot"
          :actions-label="actionsLabel"
        />

        <!-- Table Body - Loading State -->
        <TableSkeleton
          v-if="isLoading"
          :rows="10"
          :columns="props.columns"
          :show-actions="hasActionsSlot"
        />

        <!-- Table Body - Normal State -->
        <tbody v-else class="bg-table-body-bg-light dark:bg-table-body-bg-dark divide-y divide-default-light dark:divide-default-dark">
          <tr
            v-for="(row, rowIndex) in tableData"
            :key="rowIndex"
            class="hover:bg-table-body-bg-hover-light dark:hover:bg-table-body-bg-hover-dark transition-colors duration-200 cursor-pointer"
            @click="handleRowClick(row)"
          >
            <td
              v-for="column in props.columns"
              :key="column.key"
              :style="{
                width: column.width
                  ? typeof column.width === 'number'
                    ? `${column.width}px`
                    : column.width
                  : 'auto',
                minWidth: column.width
                  ? typeof column.width === 'number'
                    ? `${column.width}px`
                    : column.width
                  : '150px',
                maxWidth: column.width
                  ? typeof column.width === 'number'
                    ? `${column.width}px`
                    : column.width
                  : 'none',
              }"
              class="px-6 py-4 whitespace-nowrap text-sm text-table-body-text-light dark:text-table-body-text-dark overflow-hidden text-ellipsis tabular-nums"
            >
              <!-- Dynamic Slot -->
              <slot
                v-if="column.slot"
                :name="column.slot"
                :row="row"
                :value="getCellValue(row, column)"
              />

              <!-- Formatted Value -->
              <span v-else-if="column.format">
                {{ column.format(row) }}
              </span>

              <!-- Raw Value -->
              <span v-else>
                {{ getCellValue(row, column) }}
              </span>
            </td>

            <!-- Fixed Actions Column -->
            <td
              v-if="hasActionsSlot"
              style="width: 120px; min-width: 120px; max-width: 120px"
              class="px-6 py-4 whitespace-nowrap text-sm text-table-body-text-light dark:text-table-body-text-dark"
            >
              <slot name="actions" :row="row" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile Card View -->
    <div v-else class="space-y-4">
      <!-- Loading State for Mobile -->
      <div v-if="isLoading" class="space-y-4">
        <div
          v-for="n in 5"
          :key="n"
          class="bg-table-card-skeleton-bg-light dark:bg-table-card-skeleton-bg-dark rounded-lg p-4 animate-pulse"
        >
          <div class="space-y-3">
            <div class="h-4 bg-table-skeleton-placeholder-bg-light dark:bg-table-skeleton-placeholder-bg-dark rounded w-3/4"></div>
            <div class="h-3 bg-table-skeleton-placeholder-bg-light dark:bg-table-skeleton-placeholder-bg-dark rounded w-1/2"></div>
            <div class="h-3 bg-table-skeleton-placeholder-bg-light dark:bg-table-skeleton-placeholder-bg-dark rounded w-2/3"></div>
          </div>
        </div>
      </div>

      <!-- Normal State for Mobile -->
      <div
        v-else
        v-for="(row, rowIndex) in tableData"
        :key="rowIndex"
        class="bg-table-body-bg-light dark:bg-table-body-bg-dark rounded-lg p-4 border border-default-light dark:border-default-dark cursor-pointer hover:bg-table-body-bg-hover-light dark:hover:bg-table-body-bg-hover-dark transition-colors duration-200"
        @click="handleRowClick(row)"
      >
        <div class="space-y-3">
          <!-- Each column as a row in the card -->
          <div
            v-for="(column, columnIndex) in props.columns"
            :key="column.key"
            :class="[
              'flex justify-between items-start',
              columnIndex < props.columns.length - 1
                ? 'pb-3 border-b border-default-light dark:border-default-dark'
                : '',
            ]"
          >
            <span
              class="text-xs font-medium text-table-card-label-text-light dark:text-table-card-label-text-dark uppercase tracking-wider w-1/3"
            >
              {{ column.label }}
            </span>
            <div class="text-sm text-table-body-text-light dark:text-table-body-text-dark w-2/3 text-right tabular-nums">
              <!-- Dynamic Slot -->
              <slot
                v-if="column.slot"
                :name="column.slot"
                :row="row"
                :value="getCellValue(row, column)"
              />

              <!-- Formatted Value -->
              <span v-else-if="column.format">
                {{ column.format(row) }}
              </span>

              <!-- Raw Value -->
              <span v-else>
                {{ getCellValue(row, column) }}
              </span>
            </div>
          </div>

          <!-- Actions row for mobile -->
          <div
            v-if="hasActionsSlot"
            class="flex justify-between items-center pt-3 border-t border-default-light dark:border-default-dark"
          >
            <span
              class="text-xs font-medium text-table-card-label-text-light dark:text-table-card-label-text-dark uppercase tracking-wider"
            >
              {{ actionsLabel || "Actions" }}
            </span>
            <div class="flex space-x-2">
              <slot name="actions" :row="row" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-if="error" class="text-center py-12 text-danger-600 dark:text-danger-400">
      <p class="text-lg">{{ error }}</p>
      <BaseButton
        @click="fetchTableData"
        class="mt-4"
        variant="secondary"
        size="small"
      >
        Reintentar
      </BaseButton>
    </div>

    <div
      class="bg-table-footer-bg-light text-table-footer-text-light dark:bg-table-footer-bg-dark dark:text-table-footer-text-dark"
    >
      <ResultCount
        :internal-pagination-server="resultCountPagination"
        :total-items="tableData.length"
      />

      <TablePagination
        v-if="!isLocalData"
        :internal-pagination-server="internalPaginationServer"
        @page-change="goToPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconSearch } from "@tabler/icons-vue";
import { watchDebounced } from "@vueuse/core";
import TablePagination from "./TablePagination.vue";
import TableHeader from "./TableHeader.vue";
import TableSkeleton from "./Skeletons/TableSkeleton.vue";
import useTable from "../composables/useTable";
import type { TableField } from "@/types/Table";

interface Props<T = any> {
  columns: TableField<T>[];
  data?: T[];
  url?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  actionsLabel?: string;
  searchBy?: string[] | string;
}

const emit = defineEmits(["row-selected", "pagination-loaded"]);

// Initialize composable
const {
  refreshData,
  isLoading,
  error,
  internalData,
  internalPaginationServer,
  fetchData,
} = useTable();

// Search state
const searchQuery = ref("");
const isSearching = ref(false);

// Pagination state
const selectedPageSize = ref("10");
const currentPage = ref(1);

// Page size options
const pageSizeOptions = [
  { label: "10", value: "10" },
  { label: "25", value: "25" },
  { label: "50", value: "50" },
];

const props = withDefaults(defineProps<Props>(), {
  showSearch: true,
  searchPlaceholder: "Buscar...",
  actionsLabel: "Actions",
});

// Get slots
const slots = useSlots();

// Check if actions slot is being used
const hasActionsSlot = computed(() => !!slots.actions);
const isLocalData = computed(() => props.data !== undefined);
const tableData = computed(() => props.data ?? internalData.value);
const resultCountPagination = computed(() =>
  isLocalData.value
    ? { ...internalPaginationServer.value, total: tableData.value.length }
    : internalPaginationServer.value
);

// Create a more specific mobile check for < 640px (sm breakpoint)
const isSmallMobile = ref(false);
let resizeObserver: ResizeObserver | null = null;

const checkSmallMobile = () => {
  isSmallMobile.value = window.innerWidth < 640;
};

onMounted(() => {
  checkSmallMobile();

  // Use ResizeObserver for more efficient resize detection
  resizeObserver = new ResizeObserver(() => {
    checkSmallMobile();
  });

  // Observe the body element for viewport changes
  resizeObserver.observe(document.body);
});

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }

  // Reset searching state
  isSearching.value = false;
});

const goToPage = (page: number) => {
  currentPage.value = page;
};

// Calculate total table width based on column widths
const tableWidth = computed(() => {
  const totalFixedWidth = props.columns.reduce((sum, column) => {
    if (column.width) {
      const width =
        typeof column.width === "number"
          ? column.width
          : parseInt(column.width.toString());
      return sum + (isNaN(width) ? 0 : width);
    }
    return sum;
  }, 0);

  const columnsWithoutWidth = props.columns.filter((col) => !col.width).length;
  const minWidthPerColumn = 150; // Minimum width for columns without specified width
  const estimatedAutoWidth = columnsWithoutWidth * minWidthPerColumn;

  // Add actions column width if slot is being used
  const actionsColumnWidth = hasActionsSlot.value ? 120 : 0;

  // If no fixed widths and no actions, use 100%
  if (totalFixedWidth === 0 && !hasActionsSlot.value) {
    return "100%";
  }

  // Calculate total estimated width including auto columns and actions
  const totalEstimatedWidth =
    totalFixedWidth + estimatedAutoWidth + actionsColumnWidth;

  // Always ensure the table can scroll horizontally if content is wider
  return `max(${totalEstimatedWidth}px, 100%)`;
});

// Determine if table should use fixed layout
const useFixedLayout = computed(() => {
  return props.columns.some((column) => column.width);
});

// Function to fetch data from URL
const fetchTableData = async () => {
  if (!props.url || isLocalData.value) return;
  await fetchData(
    props.url,
    currentPage.value,
    selectedPageSize.value,
    searchQuery.value,
    props.searchBy
  );
  currentPage.value = internalPaginationServer.value.current_page;
  emit("pagination-loaded", internalPaginationServer.value);
};

// Watch for URL changes and refetch data
watch(
  () => props.url,
  () => {
    if (props.url && !isLocalData.value) {
      fetchTableData();
    }
  },
  { immediate: true }
);

watch(
  () => [selectedPageSize.value, currentPage.value],
  () => {
    if (props.url && !isLocalData.value) {
      fetchTableData();
    }
  }
);

watch(
  () => isLocalData.value,
  (usingLocalData) => {
    if (!usingLocalData && props.url) {
      fetchTableData();
    }
  }
);

// Watch for debounced search query changes
watchDebounced(
  () => searchQuery.value,
  async () => {
    if (!isLocalData.value && props.url && props.searchBy) {
      // Reset to first page when searching
      currentPage.value = 1;

      // Set searching state
      isSearching.value = true;

      // Fetch data with debounced search
      await fetchTableData();
      isSearching.value = false;
    }
  },
  { debounce: 500 }
);

// Watch for refreshData changes to trigger data refresh
watch(
  () => refreshData.value,
  (newValue) => {
    if (newValue && props.url && !isLocalData.value) {
      fetchTableData();
    }
  }
);

// Helper function to get cell value
function getCellValue<T>(row: T, column: TableField<T>): any {
  const keys = column.key.toString().split(".");
  let value = row;

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key as keyof typeof value] as T;
    } else {
      return "";
    }
  }

  return value;
}

// Handle row click event
function handleRowClick(row: any) {
  emit("row-selected", row);
}
</script>
