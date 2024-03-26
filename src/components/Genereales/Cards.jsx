// https://uiverse.io/PriyanshuGupta28/swift-chipmunk-76

// TODO: ratings

function Rating({ value, text }) {
	return (
		<div className="rating">
			{Array.from({ length: 5 }).map((_, i) => (
				<span key={i}>{i < value ? <FaStar /> : <FaRegStar />}</span>
			))}
			<span>{text && text}</span>
		</div>
	);
}
