import apiClient from "./apiClient";

export const sendMessage = async (message: string): Promise<string> => {
  try {
    const res = await apiClient.post("/assistant", { message });
    return res.data.reply || "Không có phản hồi";
  } catch (error) {
    return "❌ Lỗi kết nối server";
  }
};
