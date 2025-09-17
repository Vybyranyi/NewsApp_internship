import { Card, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import newsData from "../mock/news.json";

const { Title } = Typography;
const { Meta } = Card;

export interface NewsItem {
	id: number;
	title: string;
	description: string;
}

export default function NewsFeedPage() {
	const [news, setNews] = useState<NewsItem[]>([]);

	useEffect(() => {
		setNews(newsData);
	}, []);

	return (
		<div className="mx-auto p-4">
			<Title level={2} className="text-center mb-6">
				All News
			</Title>
			<div className="grid grid-cols-1 gap-6">
				{news.map((item) => (
					<Link to={`/news/${item.id}`} key={item.id}>
						<Card hoverable>
							<Meta title={item.title} description={item.description} />
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
