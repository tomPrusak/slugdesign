import { Fragment } from 'react/jsx-runtime';
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
		<Fragment>
			<div className="grid grid-cols-4 gap-2 py-20">
				<section className="col-span-4 col-start-2 col-end-4 ">
					<div
						className={`${settings?.txtCenter == true ? 'text-center' : ''} ${
							settings?.colsTwo == true ? 'grid grid-cols-2' : ''
						}`}>
						{header ? (
							<h2 className="text-white"> {parse(header)}</h2>
						) : undefined}
						{subHeader ? (
							<h3 className="text-white">{parse(subHeader)}</h3>
						) : undefined}
						{content
							? content?.map((txt) => (
									<p className="text-white pb-3">{parse(txt.value)}</p>
							  ))
							: undefined}
					</div>
				</section>
				<div className="col-span-4 col-start-2 col-end-4 text-center">
					{children}
				</div>
			</div>
		</Fragment>
	);
}

export default ContentBlock;
