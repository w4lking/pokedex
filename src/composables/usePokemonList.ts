import { ref } from 'vue';

export function usePokemonList() {
    // Definição das variáveis reativas
    const pokemons = ref<{ id: number; name: string; url: string; sprites: any; types: string[] }[]>([]);
    const limit = 20;
    const offset = ref(0);
    const loading = ref(false);

    // Função de busca
    const fetchPokemons = async () => {
        try {
            loading.value = true;
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset.value}`);
            const data = await res.json();

            const detailed = await Promise.all(data.results.map(async (pokemon: any) => {
                const res = await fetch(pokemon.url);
                const data = await res.json();
                return { 
                    id: data.id, 
                    name: data.name, 
                    url: pokemon.url, 
                    sprites: data.sprites, 
                    types: data.types.map((type: any) => type.type.name),
                };
            }));
            pokemons.value = [...pokemons.value, ...detailed];
            offset.value += limit;
        } catch (error) {
            console.error('Error fetching pokemons:', error);
        } finally {
            loading.value = false;
        }
    };

    return {
        pokemons,
        fetchPokemons,
        loading,
    };
}
