import { ref } from 'vue';

export function usePokemonList() {

    const pokemons = ref<any[]>([]);
    const limit = 20;
    const offset = ref(0);
    const loading = ref(false)


    const fetchPokemons = async () => {
        try {
            loading.value = true;
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            const data = await res.json();

            const detailed = await Promise.all(data.results.map(async (pokemon: any) => {
                const res = await fetch(pokemon.url)
                return await res.json()
            }))

            pokemons.value.push(...detailed);
            offset.value += limit;
        } catch (error) {
            console.error('Error fetching pokemons:', error);
        }
        finally {
            loading.value = false;
        }
    }

    return {
        pokemons,
        fetchPokemons,
        loading,
    }
}