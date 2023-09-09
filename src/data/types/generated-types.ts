export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      landing_top_cfg: {
        Row: {
          active: boolean | null;
          btn_label: string | null;
          description: string | null;
          discount: string | null;
          id: number;
          img_name: string | null;
          img_path: string | null;
          product_id: number | null;
          sub_title: string | null;
          title: string | null;
          type_cfg_id: string | null;
        };
        Insert: {
          active?: boolean | null;
          btn_label?: string | null;
          description?: string | null;
          discount?: string | null;
          id?: number;
          img_name?: string | null;
          img_path?: string | null;
          product_id?: number | null;
          sub_title?: string | null;
          title?: string | null;
          type_cfg_id?: string | null;
        };
        Update: {
          active?: boolean | null;
          btn_label?: string | null;
          description?: string | null;
          discount?: string | null;
          id?: number;
          img_name?: string | null;
          img_path?: string | null;
          product_id?: number | null;
          sub_title?: string | null;
          title?: string | null;
          type_cfg_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'landing_top_cfg_product_id_fkey';
            columns: ['product_id'];
            referencedRelation: 'products';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'landing_top_cfg_type_cfg_id_fkey';
            columns: ['type_cfg_id'];
            referencedRelation: 'ref_generic_list_sub';
            referencedColumns: ['id'];
          }
        ];
      };
      product_images: {
        Row: {
          default_view: boolean | null;
          id: number;
          name: string | null;
          path: string | null;
          product_id: number;
          title: string | null;
        };
        Insert: {
          default_view?: boolean | null;
          id?: number;
          name?: string | null;
          path?: string | null;
          product_id: number;
          title?: string | null;
        };
        Update: {
          default_view?: boolean | null;
          id?: number;
          name?: string | null;
          path?: string | null;
          product_id?: number;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'product_images_product_id_fkey';
            columns: ['product_id'];
            referencedRelation: 'products';
            referencedColumns: ['id'];
          }
        ];
      };
      products: {
        Row: {
          active: boolean | null;
          available_color: string | null;
          bar_code: string | null;
          brand_id: string | null;
          category_id: string | null;
          description: string;
          discount: number | null;
          id: number;
          id_fk: string;
          keepsell_nostock: boolean | null;
          price: number;
          sub_category_id: string | null;
          tags: string | null;
          tax: number | null;
          title: string;
          updated_at: string;
          vendor: string | null;
        };
        Insert: {
          active?: boolean | null;
          available_color?: string | null;
          bar_code?: string | null;
          brand_id?: string | null;
          category_id?: string | null;
          description: string;
          discount?: number | null;
          id?: number;
          id_fk?: string;
          keepsell_nostock?: boolean | null;
          price: number;
          sub_category_id?: string | null;
          tags?: string | null;
          tax?: number | null;
          title: string;
          updated_at?: string;
          vendor?: string | null;
        };
        Update: {
          active?: boolean | null;
          available_color?: string | null;
          bar_code?: string | null;
          brand_id?: string | null;
          category_id?: string | null;
          description?: string;
          discount?: number | null;
          id?: number;
          id_fk?: string;
          keepsell_nostock?: boolean | null;
          price?: number;
          sub_category_id?: string | null;
          tags?: string | null;
          tax?: number | null;
          title?: string;
          updated_at?: string;
          vendor?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'products_brand_id_fkey';
            columns: ['brand_id'];
            referencedRelation: 'ref_generic_list_sub';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'products_category_id_fkey';
            columns: ['category_id'];
            referencedRelation: 'ref_generic_list_cat';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'products_sub_category_id_fkey';
            columns: ['sub_category_id'];
            referencedRelation: 'ref_generic_list_sub';
            referencedColumns: ['id'];
          }
        ];
      };
      ref_colombian_cities: {
        Row: {
          codigo: number | null;
          departamento_id: number;
          id: number;
          nombre: string | null;
        };
        Insert: {
          codigo?: number | null;
          departamento_id: number;
          id?: number;
          nombre?: string | null;
        };
        Update: {
          codigo?: number | null;
          departamento_id?: number;
          id?: number;
          nombre?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'ref_colombian_cities_departamento_id_fkey';
            columns: ['departamento_id'];
            referencedRelation: 'ref_colombian_states';
            referencedColumns: ['id'];
          }
        ];
      };
      ref_colombian_states: {
        Row: {
          codigo: number | null;
          id: number;
          nombre: string | null;
        };
        Insert: {
          codigo?: number | null;
          id?: number;
          nombre?: string | null;
        };
        Update: {
          codigo?: number | null;
          id?: number;
          nombre?: string | null;
        };
        Relationships: [];
      };
      ref_countries: {
        Row: {
          area_code: string | null;
          codigo: string | null;
          id: number;
          nombre: string | null;
        };
        Insert: {
          area_code?: string | null;
          codigo?: string | null;
          id?: number;
          nombre?: string | null;
        };
        Update: {
          area_code?: string | null;
          codigo?: string | null;
          id?: number;
          nombre?: string | null;
        };
        Relationships: [];
      };
      ref_generic_list_cat: {
        Row: {
          code: string | null;
          description: string | null;
          id: string;
          name: string | null;
          order_list: number | null;
        };
        Insert: {
          code?: string | null;
          description?: string | null;
          id?: string;
          name?: string | null;
          order_list?: number | null;
        };
        Update: {
          code?: string | null;
          description?: string | null;
          id?: string;
          name?: string | null;
          order_list?: number | null;
        };
        Relationships: [];
      };
      ref_generic_list_sub: {
        Row: {
          code: string | null;
          generic_list_cat_id: string | null;
          id: string;
          meta: string | null;
          name: string | null;
          order_list: number | null;
        };
        Insert: {
          code?: string | null;
          generic_list_cat_id?: string | null;
          id?: string;
          meta?: string | null;
          name?: string | null;
          order_list?: number | null;
        };
        Update: {
          code?: string | null;
          generic_list_cat_id?: string | null;
          id?: string;
          meta?: string | null;
          name?: string | null;
          order_list?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'ref_generic_list_sub_generic_list_cat_id_fkey';
            columns: ['generic_list_cat_id'];
            referencedRelation: 'ref_generic_list_cat';
            referencedColumns: ['id'];
          }
        ];
      };
      todos: {
        Row: {
          created_at: string;
          id: number;
          is_complete: boolean | null;
          task: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          is_complete?: boolean | null;
          task?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          is_complete?: boolean | null;
          task?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'todos_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'user_profiles';
            referencedColumns: ['id'];
          }
        ];
      };
      user_profiles: {
        Row: {
          avatar_url: string | null;
          birth_date: string | null;
          first_name: string | null;
          gender_id: string | null;
          id: string;
          last_name: string | null;
          mobile_number: string | null;
          updated_at: string | null;
          username: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          birth_date?: string | null;
          first_name?: string | null;
          gender_id?: string | null;
          id: string;
          last_name?: string | null;
          mobile_number?: string | null;
          updated_at?: string | null;
          username?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          birth_date?: string | null;
          first_name?: string | null;
          gender_id?: string | null;
          id?: string;
          last_name?: string | null;
          mobile_number?: string | null;
          updated_at?: string | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'user_profiles_gender_id_fkey';
            columns: ['gender_id'];
            referencedRelation: 'ref_generic_list_sub';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_profiles_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
