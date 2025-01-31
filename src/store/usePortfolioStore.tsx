import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Work {
  title: string;
  description: string;
  technologies: [string];
  slug: string;
  list: [string];
  images: [string];
}

interface PortfolioState {
  works: Work[];
  isLoading: boolean;

  error: string | null;
  fetchWorks: (name: string) => Promise<void>;
}

const usePortfolioState = create<PortfolioState>()(
  persist(
    (set) => ({
      works: [],
      isLoading: false,
      error: null,
      fetchWorks: async () => {
        set({ isLoading: true, error: null });

        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API}/portfolio`, {
            method: "GET",
          });

          if (!res.ok) {
            throw new Error("Failed to fetch works");
          }

          const data = await res.json();
          set({ works: data, isLoading: false });
        } catch (error) {
          console.error("Error fetching portfolio:", error);
          set({ error: (error as Error).message, isLoading: false });
        }
      },
    }),
    {
      name: "portfolio-store",
      partialize: (state) => ({ works: state.works }),
    }
  )
);

export default usePortfolioState;
