"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export const useCurrentUserName = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileName = async () => {
      const client = await createClient();
      const { data, error } = await client.auth.getSession();
      if (error) {
        console.error(error);
      }

      setName(data.session?.user.user_metadata.full_name ?? "?");
    };

    fetchProfileName();
  }, []);

  return name || "?";
};
