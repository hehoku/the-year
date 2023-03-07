import supabase from "@/config/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase.from("Record").select("*");
  console.log(data);
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(200).json(data);
  }
}
