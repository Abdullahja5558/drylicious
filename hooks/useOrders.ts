import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export const useOrders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from('orders') // Aapke Supabase table ka naam
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) setOrders(data);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  return { orders, loading };
};