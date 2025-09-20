import { useQuery } from "@tanstack/react-query";
import { Card, Typography } from "antd";
import { Link } from "react-router";
import newsData from "../mock/news.json";

const { Title } = Typography;
const { Meta } = Card;

const fetchNews = async () => {
	return newsData;
};

export default function NewsFeedPage() {
	const {
		data: news,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["news"],
		queryFn: fetchNews,
	});

	if (isLoading) {
		return <div className="text-center mt-8">Loading...</div>;
	}

	if (isError) {
		return (
			<div className="text-center mt-8 text-red-500">Помилка завантаження.</div>
		);
	}

	return (
		<div className="mx-auto p-4">
			<Title level={2} className="text-center mb-6">
				All News
			</Title>
			<div className="grid grid-cols-1 gap-6">
				{news?.map((item) => (
					<Link to={`/news/${item.id}`} key={item.id} className="no-underline">
						<Card hoverable className="w-full shadow-md">
							<Meta title={item.title} description={item.description} />
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
