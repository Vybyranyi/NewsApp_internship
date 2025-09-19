import { useQuery } from "@tanstack/react-query";
import { Card, message, Typography } from "antd";
import { useParams } from "react-router";
import newsData from "../mock/news.json";

const { Title, Paragraph } = Typography;

const fetchNewsById = async (id: number) => {
	const item = newsData.find((news) => news.id === id);
	if (!item) {
		throw new Error("Новину не знайдено!");
	}
	return item;
};

export default function FullNewsPage() {
	const { id } = useParams<{ id: string }>();

	const {
		data: newsItem,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ["news", id],
		queryFn: () => fetchNewsById(Number(id)),
	});

	if (isLoading) {
		return <div className="text-center mt-8">Завантаження...</div>;
	}

	if (isError) {
		message.error(error.message);
		return (
			<div className="text-center mt-8 text-red-500">
				Помилка: {error.message}
			</div>
		);
	}

	return (
		<div className="mx-auto p-4 max-w-4xl">
			<Card className="w-full shadow-md">
				{newsItem && (
					<>
						<Title level={2}>{newsItem.title}</Title>
						<Paragraph className="mb-4">{newsItem.description}</Paragraph>
						<Paragraph>{newsItem.content}</Paragraph>
					</>
				)}
			</Card>
		</div>
	);
}
