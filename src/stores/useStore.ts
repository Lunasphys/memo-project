// import {defineStore} from 'pinia';
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
    hidden: boolean;
    timeHidden: number;
    isReviewing: boolean;

}

interface Store {
    cards: Card[];
    categories: string[];
    themes: Record<string, string[]>;
    addCard: (card: Card) => void;
    updateCard: (id: string, updates: Partial<Card>) => void;
    deleteCard: (id: string) => void;
    correctAnswer: (id: string) => void;
    incorrectAnswer: (id: string) => void;
    hideCard: (id: string) => void;
    addCategory: (category: string) => void;
    updateCategory: (oldCategory: string, newCategory: string) => void;
    deleteCategory: (category: string) => void;
    addTheme: (category: string, theme: string) => void;
    updateTheme: (category: string, oldTheme: string, newTheme: string) => void;
    deleteTheme: (category: string, theme: string) => void;
    saveToLocalStorage: () => void;
    loadFromLocalStorage: () => void;
}

const loadState = () => { // Fonction pour charger l'état depuis le localStorage
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

const saveState = (state: Store) => { // Fonction pour sauvegarder l'état dans le localStorage
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('memoAppState', serializedState);
    } catch (err) {
        console.error('Could not save state', err);
    }
};

export const useStore = create<Store>((set) => ({
    categories: loadState()?.categories || ['Langages de programmation'],
    themes: loadState()?.themes || { 'Langages de programmation': ['Java', 'Python'] },
    cards: loadState()?.cards || [
        {
            id: '1',
            front: 'Qu’est-ce que la JVM ?',
            back: 'La JVM (Java Virtual Machine) permet l’exécution des programmes Java sur n’importe quelle plateforme.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,
        },
        {
            id: '2',
            front: 'Qu’est-ce que le garbage collector en Java ?',
            back: 'Le garbage collector en Java est un processus de gestion automatique de la mémoire.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '3',
            front: 'Qu’est-ce que le JDK ?',
            back: 'Le JDK (Java Development Kit) est un environnement de développement pour construire des applications Java.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '4',
            front: 'Qu’est-ce que le JRE ?',
            back: 'Le JRE (Java Runtime Environment) est une partie du JDK qui permet d’exécuter des programmes Java.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '5',
            front: 'Qu’est-ce que la classe String en Java ?',
            back: 'La classe String est utilisée pour créer et manipuler des séquences de caractères.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '6',
            front: 'Qu’est-ce qu’une interface en Java ?',
            back: 'Une interface en Java est un type abstrait utilisé pour spécifier un comportement que les classes doivent implémenter.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '7',
            front: 'Qu’est-ce qu’une classe abstraite en Java ?',
            back: 'Une classe abstraite est une classe qui ne peut pas être instanciée et peut contenir des méthodes abstraites.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '8',
            front: 'Qu’est-ce que l’héritage en Java ?',
            back: 'L’héritage est un mécanisme qui permet de créer une nouvelle classe en utilisant les propriétés et méthodes d’une classe existante.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '9',
            front: 'Qu’est-ce que le polymorphisme en Java ?',
            back: 'Le polymorphisme permet d’utiliser une interface unique pour représenter différentes implémentations.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '10',
            front: 'Qu’est-ce qu’une exception en Java ?',
            back: 'Une exception est un événement qui se produit pendant l’exécution d’un programme et qui perturbe le flux normal des instructions.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '11',
            front: 'Qu’est-ce qu’un thread en Java ?',
            back: 'Un thread est une unité d’exécution dans un programme. Le multithreading permet l’exécution simultanée de plusieurs threads.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '12',
            front: 'Qu’est-ce que la synchronisation en Java ?',
            back: 'La synchronisation est un mécanisme pour contrôler l’accès des threads multiples à une ressource partagée.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '13',
            front: 'Qu’est-ce que la sérialisation en Java ?',
            back: 'La sérialisation est le processus de conversion d’un objet en un flux de bytes pour le stockage ou la transmission.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '14',
            front: 'Qu’est-ce que le bytecode en Java ?',
            back: 'Le bytecode est le code intermédiaire généré par le compilateur Java et exécuté par la JVM.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
            id: '15',
            front: 'Qu’est-ce que l’encapsulation en Java ?',
            back: 'L’encapsulation est une technique utilisée pour protéger les données en les rendant accessibles uniquement via des méthodes.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
            timeHidden: 0,

        },
        {
        id: 16,
        front: 'Qu\'est-ce que Python ?',
        back: 'Python est un langage de programmation interprété, polyvalent et facile à apprendre.',
        category: 'Langages de programmation',
        theme: 'Python',
        box: 1,
        hidden: false,
        timeHidden: 0
    },
    {
        id: 17,
        front: 'Quelles sont les principales caractéristiques de Python ?',
        back: 'Python est connu pour sa lisibilité, sa syntaxe claire, sa grande communauté et sa polyvalence.',
        category: 'Langages de programmation',
        theme: 'Python',
        box: 1,
        hidden: false,
        timeHidden: 0
    },
    {
        id: 18,
        front: 'Pourquoi Python est-il populaire en science des données ?',
        back: 'Python offre de nombreuses bibliothèques puissantes comme NumPy, Pandas et Matplotlib pour l\'analyse de données.',
        category: 'Langages de programmation',
        theme: 'Python',
        box: 1,
        hidden: false,
        timeHidden: 0
    },
    {
        id: 19,
        front: 'Quelle est la différence entre Python 2 et Python 3 ?',
        back: 'Python 3 est la version actuelle avec des améliorations majeures par rapport à Python 2, qui n\'est plus maintenu.',
        category: 'Langages de programmation',
        theme: 'Python',
        box: 1,
        hidden: false,
        timeHidden: 0
    },
    {
        id: 20,
        front: 'Comment gérer les exceptions en Python ?',
        back: 'Les exceptions en Python sont gérées à l\'aide des blocs try, except pour capturer et traiter les erreurs.',
        category: 'Langages de programmation',
        theme: 'Python',
        box: 1,
        hidden: false,
        timeHidden: 0
    },
    {
        id: 21,
        front: 'Qu\'est-ce que l\'interpréteur Python ?',
        back: 'L\'interpréteur Python est un programme qui exécute les instructions Python ligne par ligne.',
        category: 'Langages de programmation',
        theme: 'Python',
        box: 1,
        hidden: false,
        timeHidden: 0
    },
    {
        id: 22,
        front: 'Quels sont les avantages de l\'utilisation de Python pour le développement web ?',
        back: 'Python est utilisé avec des frameworks comme Django et Flask pour le développement rapide et efficace de sites web.',
        category: 'Langages de programmation',
        theme: 'Python',
        box: 1,
        hidden: false,
        timeHidden: 0
    },
    {
        id: 23,
        front: 'Comment définir une fonction en Python ?',
        back: 'Les fonctions en Python sont définies avec le mot-clé def suivi du nom de la fonction et de ses paramètres.',
        category: 'Langages de programmation',
        theme: 'Python',
        box: 1,
        hidden: false,
        timeHidden: 0
    },
    {
        id: 24,
        front: 'Qu\'est-ce que PIP en Python ?',
        back: 'PIP est un gestionnaire de paquets Python qui facilite l\'installation et la gestion de bibliothèques externes.',
        category: 'Langages de programmation',
        theme: 'Python',
        box: 1,
        hidden: false,
        timeHidden: 0
    },
    {
        id: 25,
        front: 'Quelle est l\'importance des listes en Python ?',
        back: 'Les listes en Python sont des structures de données flexibles et polyvalentes pour stocker des éléments de manière séquentielle.',
        category: 'Langages de programmation',
        theme: 'Python',
        box: 1,
        hidden: false,
        timeHidden: 0
    }

    ],

    addCard: (card) =>
        set((state) => {
            const newCards = [...state.cards, { ...card, hidden: false }];
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
    deleteCard: (id) =>
        set((state) => {
            const newCards = state.cards.filter((card) => card.id !== id);
            saveState({ ...state, cards: newCards });
            return { cards: newCards };
        }),
    correctAnswer: (id) =>
        set((state) => {
            const newCards = state.cards.map((card) => {
                if (card.id === id) {
                    return {...card, box: card.box + 1, hidden: true, timeHidden: Date.now() + (60000 * Math.pow(2, card.box - 1))}; // Chaque boîte double le délai par rapport à la précédente grâce à la puissance de 2 en terme pour masquer la carte
                }
                return card;
            }).filter((card) => card.box <= 5); // Supprime les cartes de la boîte 6 et plus
            saveState({...state, cards: newCards});
            return {cards: newCards};
        }),

    incorrectAnswer: (id) =>
        set((state) => {
            const newCards = state.cards.map((card) =>
                card.id === id ? {...card, box: 1, hidden: false, timeHidden: 0} : card // Remet la carte dans la première boîte
            );
            saveState({...state, cards: newCards});
            return {cards: newCards};
        }),
    hideCard: (id) =>
        set((state) => {
            const newCards = state.cards.map((card) =>
                card.id === id ? { ...card, hidden: true } : card
            );
            saveState({ ...state, cards: newCards });
            return { cards: newCards };
        }),

    addCategory: (category) =>
        set((state) => {
            const newCategories = [...state.categories, category];
            saveState({ ...state, categories: newCategories });
            return { categories: newCategories };
        }),
    updateCategory: (oldCategory, newCategory) =>
        set((state) => {
            const newCategories = state.categories.map((category) =>
                category === oldCategory ? newCategory : category
            );
            const newThemes = { ...state.themes, [newCategory]: state.themes[oldCategory] };
            delete newThemes[oldCategory];
            const newCards = state.cards.map((card) =>
                card.category === oldCategory ? { ...card, category: newCategory } : card
            );
            saveState({ ...state, categories: newCategories, themes: newThemes, cards: newCards });
            return { categories: newCategories, themes: newThemes, cards: newCards };
        }),
    deleteCategory: (category) =>
        set((state) => {
            const newCategories = state.categories.filter((cat) => cat !== category);
            const { [category]: _, ...newThemes } = state.themes;
            const newCards = state.cards.filter((card) => card.category !== category);
            saveState({ ...state, categories: newCategories, themes: newThemes, cards: newCards });
            return { categories: newCategories, themes: newThemes, cards: newCards };
        }),

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
    updateTheme: (category, oldTheme, newTheme) =>
        set((state) => {
            const newThemes = {
                ...state.themes,
                [category]: state.themes[category].map((theme) =>
                    theme === oldTheme ? newTheme : theme
                ),
            };
            const newCards = state.cards.map((card) =>
                card.theme === oldTheme && card.category === category ? { ...card, theme: newTheme } : card
            );
            saveState({ ...state, themes: newThemes, cards: newCards });
            return { themes: newThemes, cards: newCards };
        }),
    deleteTheme: (category, theme) =>
        set((state) => {
            const newThemes = {
                ...state.themes,
                [category]: state.themes[category].filter((th) => th !== theme),
            };
            const newCards = state.cards.filter(
                (card) => !(card.theme === theme && card.category === category)
            );
            saveState({ ...state, themes: newThemes, cards: newCards });
            return { themes: newThemes, cards: newCards };
        }),

    saveToLocalStorage: () => set((state) => {
        saveState(state);
        return state;
    }),
    loadFromLocalStorage: () => set(() => loadState() || {}),
}));

// chargement initial
useStore.getState().loadFromLocalStorage();
