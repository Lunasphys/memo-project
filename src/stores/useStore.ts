
import create from 'zustand';

interface Card {
    id: string;
    front: string;
    back: string;
    image?: string;
    audio?: string;
    video?: string;
    category: string;
    theme: string;
    box: number;
}

interface Store {
    cards: Card[];
    addCard: (card: Card) => void;
    updateCard: (id: string, updates: Partial<Card>) => void;
    correctAnswer: (id: string) => void;
    incorrectAnswer: (id: string) => void;
    categories: string[];
    addCategory: (category: string) => void;
    themes: Record<string, string[]>;
    addTheme: (category: string, theme: string) => void;
    saveToLocalStorage: () => void;
    loadFromLocalStorage: () => void;
}

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('memoAppState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Could not load state', err);
        return undefined;
    }
};

const saveState = (state: Store) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('memoAppState', serializedState);
    } catch (err) {
        console.error('Could not save state', err);
    }
};

export const useStore = create<Store>((set) => ({
    categories: loadState()?.categories || ['Langages de programmation'],
    addCategory: (category) =>
        set((state) => {
            const newCategories = [...state.categories, category];
            saveState({ ...state, categories: newCategories });
            return { categories: newCategories };
        }),

    themes: loadState()?.themes || {
        'Langages de programmation': ['Java', 'C#'],
    },
    addTheme: (category, theme) =>
        set((state) => {
            const newThemes = {
                ...state.themes,
                [category]: state.themes[category]
                    ? [...state.themes[category], theme]
                    : [theme],
            };
            saveState({ ...state, themes: newThemes });
            return { themes: newThemes };
        }),

    cards: loadState()?.cards || [
        {
            id: '1',
            front: 'Qu’est-ce que la JVM ?',
            back: 'La JVM (Java Virtual Machine) permet l’exécution des programmes Java sur n’importe quelle plateforme.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
        },
        {
            id: '2',
            front: 'Qu’est-ce que le garbage collector en Java ?',
            back: 'Le garbage collector en Java est un processus de gestion automatique de la mémoire.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '3',
            front: 'Qu’est-ce que le JDK ?',
            back: 'Le JDK (Java Development Kit) est un environnement de développement pour construire des applications Java.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '4',
            front: 'Qu’est-ce que le JRE ?',
            back: 'Le JRE (Java Runtime Environment) est une partie du JDK qui permet d’exécuter des programmes Java.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '5',
            front: 'Qu’est-ce que la classe String en Java ?',
            back: 'La classe String est utilisée pour créer et manipuler des séquences de caractères.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '6',
            front: 'Qu’est-ce qu’une interface en Java ?',
            back: 'Une interface en Java est un type abstrait utilisé pour spécifier un comportement que les classes doivent implémenter.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '7',
            front: 'Qu’est-ce qu’une classe abstraite en Java ?',
            back: 'Une classe abstraite est une classe qui ne peut pas être instanciée et peut contenir des méthodes abstraites.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '8',
            front: 'Qu’est-ce que l’héritage en Java ?',
            back: 'L’héritage est un mécanisme qui permet de créer une nouvelle classe en utilisant les propriétés et méthodes d’une classe existante.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '9',
            front: 'Qu’est-ce que le polymorphisme en Java ?',
            back: 'Le polymorphisme permet d’utiliser une interface unique pour représenter différentes implémentations.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '10',
            front: 'Qu’est-ce qu’une exception en Java ?',
            back: 'Une exception est un événement qui se produit pendant l’exécution d’un programme et qui perturbe le flux normal des instructions.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '11',
            front: 'Qu’est-ce qu’un thread en Java ?',
            back: 'Un thread est une unité d’exécution dans un programme. Le multithreading permet l’exécution simultanée de plusieurs threads.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '12',
            front: 'Qu’est-ce que la synchronisation en Java ?',
            back: 'La synchronisation est un mécanisme pour contrôler l’accès des threads multiples à une ressource partagée.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '13',
            front: 'Qu’est-ce que la sérialisation en Java ?',
            back: 'La sérialisation est le processus de conversion d’un objet en un flux de bytes pour le stockage ou la transmission.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '14',
            front: 'Qu’est-ce que le bytecode en Java ?',
            back: 'Le bytecode est le code intermédiaire généré par le compilateur Java et exécuté par la JVM.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
        {
            id: '15',
            front: 'Qu’est-ce que l’encapsulation en Java ?',
            back: 'L’encapsulation est une technique utilisée pour protéger les données en les rendant accessibles uniquement via des méthodes.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,

        },
    ],
    addCard: (card) =>
        set((state) => {
            const newCards = [...state.cards, card];
            saveState({ ...state, cards: newCards });
            return { cards: newCards };
        }),
    updateCard: (id, updates) =>
        set((state) => {
            const newCards = state.cards.map((card) =>
                card.id === id ? { ...card, ...updates } : card
            );
            saveState({ ...state, cards: newCards });
            return { cards: newCards };
        }),
    correctAnswer: (id) =>
        set((state) => {
            const newCards = state.cards.map((card) =>
                card.id === id ? { ...card, box: card.box + 1 } : card
            ).filter((card) => card.box <= 5); // Supprime les cartes de la boîte 6 et plus
            saveState({ ...state, cards: newCards });
            return { cards: newCards };
        }),
    incorrectAnswer: (id) =>
        set((state) => {
            const newCards = state.cards.map((card) =>
                card.id === id ? { ...card, box: 1 } : card
            );
            saveState({ ...state, cards: newCards });
            return { cards: newCards };
        }),
    saveToLocalStorage: () => set((state) => {
        saveState(state);
        return state;
    }),
    loadFromLocalStorage: () => set(() => loadState() || {}),
}));

// Appel de chargement initial
useStore.getState().loadFromLocalStorage();
