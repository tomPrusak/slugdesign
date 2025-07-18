import { type ContentBlockProps } from './ContentBlockProps';
import parse from 'html-react-parser';
function ContentBlock({
	header,
	subHeader,
	content,
	settings,
	children,
}: ContentBlockProps) {
	return (
		<section className="row flex p-20 justify-center ">
			<div
				className={` text-center ${
					settings?.center == true ? 'justify-center' : ''
				} ${settings?.left == true ? 'justify-start' : ''}${
					settings?.right == true ? 'justify-end' : ''
				}`}>
				{header ? <h2> {parse(header)}</h2> : undefined}
				{subHeader ? <h3>{parse(subHeader)}</h3> : undefined}
				{content ? content?.map((txt) => <p>{parse(txt.value)}</p>) : undefined}
				{children}
			</div>
		</section>
	);
}

export default ContentBlock;
