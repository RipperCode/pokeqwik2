import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const pokemonId = useSignal(1);
  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>
      <div class="mt-2">
        <button onClick$={() => pokemonId.value--} class="btn btn-primary mr-2">
          Anterior
        </button>
        <button onClick$={() => pokemonId.value++} class="btn btn-primary">
          Siguiente
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
