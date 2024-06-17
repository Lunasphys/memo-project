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
    categories: string[];
    addCategory: (category: string) => void;
    themes: Record<string, string[]>;
    addTheme: (category: string, theme: string) => void;
}

export const useStore = create<Store>((set) => ({
    cards: [],
    addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
    updateCard: (id, updates) =>
        set((state) => ({
            cards: state.cards.map((card) =>
                card.id === id ? { ...card, ...updates } : card
            ),
        })),
    categories: [],
    addCategory: (category) =>
        set((state) => ({ categories: [...state.categories, category] })),
    themes: {},
    addTheme: (category, theme) =>
        set((state) => ({
            themes: {
                ...state.themes,
                [category]: state.themes[category]
                    ? [...state.themes[category], theme]
                    : [theme],
            },
        })),
}));
