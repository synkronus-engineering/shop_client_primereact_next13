import { createClientComponentClient, createRouteHandlerClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import { Database } from 'data/types/database-types';

export const supabaseClient = () => createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export const createBrowserClient = () => createClientComponentClient<Database>();

export const createApiServerClient = (cookies: any) => createServerComponentClient<Database>({ cookies });

// creates supa instance for route handlers (GET, PUT, POST, DELETE...)
export const createServerRouteClient = (cookies: any) => createRouteHandlerClient<Database>({ cookies });
