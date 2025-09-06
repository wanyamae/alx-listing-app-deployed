import { PillProps } from '@/interfaces';

const Pill: React.FC<PillProps> = ({ label, onClick, active}) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full transition-colors focus:outline-none ${
            active
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
            }`
            }
            >
                {label}
            </button>
    );
};

    export default Pill;