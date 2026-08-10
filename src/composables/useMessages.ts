const messages = ref<{ ts: number; text: string; error: boolean }[]>([]);

export default function useMessages() {
  const pushMessage = (text: string, error = false) => {
    messages.value.push({ ts: Date.now(), text, error });
  };

  const shiftMessage = () => {
    messages.value.shift();
  };
  return {
    messages,
    pushMessage,
    shiftMessage,
  };
}
