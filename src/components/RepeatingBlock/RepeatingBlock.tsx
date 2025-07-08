import { type RepeatingProps } from './RepeatingBlockProps';

function RepeatingBlock({ image, children, settings }: RepeatingProps) {
	return (
		<div
			className={` bg-center bg-repeat w-full  ${
				settings?.flipImg == true ? 'rotate-180' : ''
			} ${settings?.positionAbsolute == true ? 'absolute' : 'relative'}`}
			style={{
				backgroundImage: `url('${image.src}')`,
				backgroundColor: `${image.bgColor}`,
				padding: settings?.padding,
				height: settings?.height,
				zIndex: settings?.index,
				top: settings?.top,
			}}>
			{children}
		</div>
	);
}

export default RepeatingBlock;
