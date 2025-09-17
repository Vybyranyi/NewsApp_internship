import { Card, message, Typography } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import newsData from "../mock/news.json";

const { Title, Paragraph } = Typography;

interface NewsItem {
	id: number;
	title: string;
	description: string;
	content: string;
}

export default function FullNewsPage() {
	const { id } = useParams<{ id: string }>();
	const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

	useEffect(() => {
		const foundItem = newsData.find((item) => item.id === Number(id));

		if (foundItem) {
			setNewsItem(foundItem);
		} else {
			message.error("Новину не знайдено!");
		}
	}, [id]);

	if (!newsItem) {
		return <div>Завантаження...</div>;
	}

	return (
		<div className="mx-auto p-4 max-w-4xl">
			<Card className="w-full shadow-md">
				<Title level={2}>{newsItem.title}</Title>
				<Paragraph className="mb-4">{newsItem.description}</Paragraph>
				<Paragraph>{newsItem.content}</Paragraph>
			</Card>
		</div>
	);
}
