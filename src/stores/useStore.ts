import create from 'zustand';

interface Card {
    id: string;
    front: string;
    back: string;
    category: string;
    theme: string;
    box: number;
    hidden?: boolean;
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
}

export const useStore = create<Store>((set) => ({
    // Catégories par défaut
    categories: ['Langages de programmation'],
    addCategory: (category) =>
        set((state) => ({categories: [...state.categories, category]})),

    // Thèmes par défaut
    themes: {
        'Langages de programmation': ['Java', 'C#'],
    },
    addTheme: (category, theme) =>
        set((state) => ({
            themes: {
                ...state.themes,
                [category]: state.themes[category]
                    ? [...state.themes[category], theme]
                    : [theme],
            },
        })),

    // Cartes par défaut avec 15 questions pour chaque thème
    cards: [
        {
            id: '1',
            front: 'Qu’est-ce que la JVM ?',
            back: 'La JVM (Java Virtual Machine) permet l’exécution des programmes Java sur n’importe quelle plateforme.',
            category: 'Langages de programmation',
            theme: 'Java',
            box: 1,
            hidden: false,
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

    addCard: (card) => set((state) => ({cards: [...state.cards, card]})),
    updateCard: (id, updates) =>
        set((state) => ({
            cards: state.cards.map((card) =>
                card.id === id ? {...card, ...updates} : card
            ),
        })),

    correctAnswer: (id) =>
        set((state) => {
            let Timer = 0;
            const updatedCards = state.cards.map((card) => {
                Timer = card.box * 60000; // Timer en fonction de la boîte
                return card;
            }).filter((card) => card.box <= 5); // Supprime les cartes de la boîte 6 et plus
            setTimeout(() => {
                // Réinitialiser la propriété "hidden" à "false" après 2 minutes
                set((state) => ({
                    cards: state.cards.map((card) => {
                        if (card.id === id) {
                            return {...card, hidden: false};
                        }
                        return card;
                    })
                }));
            }, Timer); // Timer en fonction de la boîte
            return {cards: updatedCards};
        }),

    incorrectAnswer: (id) =>
        set((state) => ({
            cards: state.cards.map((card) =>
                card.id === id
                    ? {...card, box: 1}
                    : card
            ),
        })),
}));
