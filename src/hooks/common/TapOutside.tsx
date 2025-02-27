import { useEffect, useRef } from 'react';

interface UseTapOutsideProps {
	onTapOutside: () => void;
	isOpen: boolean;
}

export const useTapOutside = ({ onTapOutside, isOpen }: UseTapOutsideProps) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (isOpen && ref.current && !ref.current.contains(event.target as Node)) {
				onTapOutside();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onTapOutside, isOpen]);

	return ref;
};
