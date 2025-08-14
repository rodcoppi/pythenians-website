// Supabase Configuration
const SUPABASE_URL = 'https://tbyxrsbtvoxiahdptemv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRieXhyc2J0dm94aWFoZHB0ZW12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNDU2MzQsImV4cCI6MjA3MDcyMTYzNH0.-x-GiAwRc-uxuWg_RrBbACtuQHZE0WuhTLT8sXfpsAM';

// Initialize Supabase client
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Authentication functions
const auth = {
    async signIn(email, password) {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email,
            password
        });
        
        if (error) {
            console.error('Error signing in:', error);
            throw error;
        }
        return data;
    },

    async signOut() {
        const { error } = await supabaseClient.auth.signOut();
        if (error) {
            console.error('Error signing out:', error);
            throw error;
        }
    },

    async getUser() {
        const { data: { user } } = await supabaseClient.auth.getUser();
        return user;
    },

    async isAuthenticated() {
        const user = await this.getUser();
        return !!user;
    },

    onAuthStateChange(callback) {
        return supabaseClient.auth.onAuthStateChange(callback);
    }
};

// Database functions
const db = {
    // Memes functions
    async getMemes() {
        const { data, error } = await supabaseClient
            .from('memes')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error fetching memes:', error);
            return [];
        }
        return data;
    },

    async addMeme(meme) {
        const { data, error } = await supabaseClient
            .from('memes')
            .insert([meme])
            .select();
        
        if (error) {
            console.error('Error adding meme:', error);
            throw error;
        }
        return data[0];
    },

    async deleteMeme(id) {
        const { error } = await supabaseClient
            .from('memes')
            .delete()
            .eq('id', id);
        
        if (error) {
            console.error('Error deleting meme:', error);
            throw error;
        }
        return true;
    },

    // News functions
    async getNews() {
        const { data, error } = await supabaseClient
            .from('news')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error fetching news:', error);
            return [];
        }
        return data;
    },

    async getPublishedNews() {
        const { data, error } = await supabaseClient
            .from('news')
            .select('*')
            .eq('published', true)
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error fetching published news:', error);
            return [];
        }
        return data;
    },

    async addNews(article) {
        const { data, error } = await supabaseClient
            .from('news')
            .insert([article])
            .select();
        
        if (error) {
            console.error('Error adding news:', error);
            throw error;
        }
        return data[0];
    },

    async updateNews(id, updates) {
        const { data, error } = await supabaseClient
            .from('news')
            .update(updates)
            .eq('id', id)
            .select();
        
        if (error) {
            console.error('Error updating news:', error);
            throw error;
        }
        return data[0];
    },

    async deleteNews(id) {
        const { error } = await supabaseClient
            .from('news')
            .delete()
            .eq('id', id);
        
        if (error) {
            console.error('Error deleting news:', error);
            throw error;
        }
        return true;
    }
};