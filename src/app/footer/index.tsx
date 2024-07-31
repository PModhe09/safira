import { FaInstagram, FaSpotify, FaLink } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import Image from 'next/image';
import logo from '../../../public/logo.png'; // Adjust the path to your logo image

export default function Footer() {
    return (
        <div className='bg-green-500 text-white py-8'>
            <div className='container mx-auto flex flex-col items-center'>
                <div className='flex flex-col md:flex-row items-center justify-center mb-4 space-y-4 md:space-y-0 md:space-x-8'>
                    <div className='flex items-center'>
                        <RiMoneyDollarCircleLine size={24} className='mr-2' />
                        <a href='https://milaap.org/fundraisers/support-members-of-the-mitr-trust/deeplink?deeplink_type=paytm' target='_blank' rel='noopener noreferrer' className='hover:text-gray-300'>
                            Donation Link
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <FaInstagram size={24} className='mr-2' />
                        <a href='https://www.instagram.com/projectrightofficial/' target='_blank' rel='noopener noreferrer' className='hover:text-gray-300'>
                            Instagram
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <FaSpotify size={24} className='mr-2' />
                        <a href='https://podcasters.spotify.com/pod/show/safira96/episodes/Project-RIGHT-An-Introduction-e2jj7j5?%24web_only=true&_branch_match_id=1054387633347354336&utm_source=web&utm_campaign=web-share&utm_medium=sharing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy7IL8lMq0zMS87IL9ItT03SSywo0MvJzMvWT9VP8zUqNDII9K70SgIAdIbVCDAAAAA%3D' target='_blank' rel='noopener noreferrer' className='hover:text-gray-300'>
                            Spotify
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <FaLink size={24} className='mr-2' />
                        <a href='https://www.projectright.net/background' target='_blank' rel='noopener noreferrer' className='hover:text-gray-300'>
                            Website
                        </a>
                    </div>
                </div>
                <p className='text-center mt-4'>© 2024 Project Right. All rights reserved.</p>
            </div>
        </div>
    );
}
