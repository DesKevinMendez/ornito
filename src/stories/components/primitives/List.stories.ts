import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { IconChevronRight } from '@tabler/icons-vue';
import { onScopeDispose, ref } from 'vue';
import type { ItemId } from '../../../types/Item';
import type { ListPagination } from '../../../types/List';
import Item from '../../../components/Item.vue';
import List from '../../../components/List.vue';

type ListStoryArgs = InstanceType<typeof List>['$props'];

const meta: Meta<ListStoryArgs> = {
  title: 'Components/Primitives/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    border: { control: 'boolean' },
    pagination: { control: 'object' },
    scrollDistance: { control: { type: 'number', min: 0, step: 10 } },
    loading: { control: 'boolean' },
    onRequest: { action: 'request', control: false },
  },
  args: { border: false, scrollDistance: 50, loading: false },
  render: (args) => ({
    components: { List, Item },
    setup() {
      const drivers = [
        { id: 'driver-42', title: 'Ana Rivera', subtitle: 'Assigned driver' },
        { id: 'driver-43', title: 'Luis Torres', subtitle: 'Available for deliveries' },
        { id: 'driver-44', title: 'Marta Garcia', subtitle: 'Dispatcher' },
      ];
      return { args, drivers, IconChevronRight };
    },
    template: `
      <div class="w-full max-w-sm">
        <List v-bind="args" aria-label="Drivers">
          <li v-for="driver in drivers" :key="driver.id">
            <Item v-bind="driver" :icon="IconChevronRight" />
          </li>
        </List>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithBorder: Story = { args: { border: true } };
export const Dark: Story = {
  ...WithBorder,
  decorators: [() => ({
    template: '<div class="dark rounded-xl bg-gray-950 p-4"><story /></div>',
  })],
};

function notificationsStory(clickable = false): Story {
  return {
    args: { border: true },
    render: (args) => ({
      components: { List, Item },
      setup() {
        const lastClick = ref<ItemId>();
        const notifications = [
          {
            id: 1,
            name: 'Jese Leos',
            prefix: 'New message from ',
            connector: ': ',
            emphasis: '',
            detail: '"Hey, what\'s up? All set for the presentation?"',
            time: 'a few moments ago',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop',
          },
          {
            id: 2,
            name: 'Joseph McFall',
            prefix: '',
            connector: ' and ',
            emphasis: '5 others',
            detail: ' started following you.',
            time: '10 minutes ago',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&fit=crop',
          },
          {
            id: 3,
            name: 'Bonnie Green',
            prefix: '',
            connector: ' and ',
            emphasis: '141 others',
            detail: ' love your story. See it and view more stories.',
            time: '23 minutes ago',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop',
          },
          {
            id: 4,
            name: 'Leslie Livingston',
            prefix: '',
            connector: '',
            emphasis: '',
            detail: ' mentioned you in a comment. What do you say?',
            time: '1 hour ago',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop',
          },
        ];
        return { args, notifications, lastClick, clickable };
      },
      template: `
        <div class="flex w-full max-w-sm flex-col gap-3">
          <List v-bind="args" aria-label="Notifications">
            <li v-for="notification in notifications" :key="notification.id">
              <Item
                :id="notification.id"
                :title="notification.name"
                :image="notification.image"
                :clickable="clickable"
                :hoverable="!clickable"
                @click="lastClick = $event"
              >
                <template #title>
                  <span class="font-normal text-gray-500 dark:text-gray-400">
                    {{ notification.prefix }}<strong class="font-medium text-gray-900 dark:text-white">{{ notification.name }}</strong>{{ notification.connector }}<strong v-if="notification.emphasis" class="font-medium text-gray-900 dark:text-white">{{ notification.emphasis }}</strong>{{ notification.detail }}
                  </span>
                </template>
                <template #subtitle>
                  <span class="mt-1 block text-xs text-secondary-600 dark:text-secondary-400">{{ notification.time }}</span>
                </template>
              </Item>
            </li>
          </List>
          <pre v-if="lastClick !== undefined" class="whitespace-pre-wrap break-words rounded-lg bg-gray-100 p-3 text-xs text-gray-900 dark:bg-gray-800 dark:text-white">Clicked ID: {{ lastClick }}</pre>
        </div>
      `,
    }),
  };
}

export const NotificationsList: Story = notificationsStory();
export const DarkNotificationsList: Story = {
  ...NotificationsList,
  decorators: Dark.decorators,
};
export const ClickableNotificationsList: Story = notificationsStory(true);
export const DarkClickableNotificationsList: Story = {
  ...ClickableNotificationsList,
  decorators: Dark.decorators,
};

export const InfiniteScroll: Story = {
  args: { border: true },
  parameters: { controls: { exclude: ['pagination', 'loading'] } },
  render: (args) => ({
    components: { List, Item },
    setup() {
      const pageSize = 8;
      const names = ['Ana Rivera', 'Luis Torres', 'Marta Garcia', 'Jose Lopez', 'Sofia Ruiz', 'Diego Perez', 'Elena Cruz', 'Carlos Vega'];
      const createPage = (page: number) => names.map((title, index) => ({
        id: (page - 1) * pageSize + index + 1,
        title,
        subtitle: `Driver #${(page - 1) * pageSize + index + 1} · Page ${page}`,
      }));
      const drivers = ref(createPage(1));
      const pagination = ref<ListPagination>({ current_page: 1, last_page: 4 });
      const loading = ref(false);
      const requestedPages = ref<number[]>([]);
      const lastClick = ref<ItemId>();
      let timer: ReturnType<typeof setTimeout> | undefined;

      const loadNextPage = (page: number) => {
        if (loading.value || page !== pagination.value.current_page + 1) return;
        loading.value = true;
        requestedPages.value.push(page);
        // Simulate an API response; the consuming app owns fetching and appending rows.
        timer = setTimeout(() => {
          drivers.value.push(...createPage(page));
          pagination.value = { ...pagination.value, current_page: page };
          loading.value = false;
        }, 600);
      };

      onScopeDispose(() => clearTimeout(timer));
      return { args, drivers, pagination, loading, requestedPages, lastClick, loadNextPage, IconChevronRight };
    },
    template: `
      <div class="flex w-full max-w-sm flex-col gap-3">
        <p class="text-sm text-gray-600 dark:text-gray-400">Scroll to load more · Distance: {{ args.scrollDistance }}px</p>
        <List v-bind="args" :pagination="pagination" :loading="loading" class="max-h-80" aria-label="Paginated drivers" @request="loadNextPage">
          <li v-for="driver in drivers" :key="driver.id">
            <Item v-bind="driver" :icon="IconChevronRight" clickable @click="lastClick = $event" />
          </li>
        </List>
        <p role="status" class="text-sm text-gray-600 dark:text-gray-400">
          {{ loading ? 'Loading more drivers…' : pagination.current_page === pagination.last_page ? 'All drivers loaded' : 'Scroll for the next page' }}
          · Page {{ pagination.current_page }} / {{ pagination.last_page }} · {{ drivers.length }} drivers
        </p>
        <pre class="whitespace-pre-wrap rounded-lg bg-gray-100 p-3 text-xs text-gray-900 dark:bg-gray-800 dark:text-white">Requested pages: {{ requestedPages.length ? requestedPages.join(' → ') : 'None yet' }}</pre>
        <p v-if="lastClick !== undefined" class="text-xs text-gray-600 dark:text-gray-400">Clicked ID: {{ lastClick }}</p>
      </div>
    `,
  }),
};

export const DarkInfiniteScroll: Story = {
  ...InfiniteScroll,
  decorators: Dark.decorators,
};
