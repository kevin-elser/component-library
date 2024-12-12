import SectionTitle from '@/components/ui/SectionTitle';
import { ProgressiveButton } from '@/components/ui/ProgressiveButton';
import { MdEmail, MdChat, MdPhone, MdLocationOn } from 'react-icons/md';
import { ButtonHoverEffect } from '@/components/ui/ProgressiveButton';

interface ContactSectionProps {
    backgroundColor?: string;
    popColor?: string;
    title?: string;
    description?: string;
    tagline?: string;
    email?: string;
    phone?: string;
    address?: string;
    chatEnabled?: boolean;
    chatUrl?: string;
    hoverEffect?: ButtonHoverEffect;
    lighterColor?: string;
}

export default function ContactSectionComponent({
    backgroundColor = '#ffffff',
    popColor = 'hsl(240, 77%, 40%)',
    title = 'Let\'s get in touch!',
    tagline = 'Contact us',
    description = 'Get in touch with our friendly support team for immediate assistance. We make sure we are available 24/7 to help you with any questions or concerns you may have.',
    email = 'hello@example.com',
    phone = '+1 (555) 000-0000',
    address = '123 Sample St, Sydney NSW 2000 AU',
    chatEnabled = true,
    chatUrl = '#',
    hoverEffect = "slide",
    lighterColor = "hsl(240, 77%, 60%)",
}: ContactSectionProps) {
    // Convert HSL to HSLA by replacing the closing parenthesis with the alpha value
    const iconBackground = popColor.replace(')', ', 0.15)');

    return (
        <section className="w-full py-16 px-8 md:px-12" style={{ backgroundColor }}>
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    tagline={tagline}
                    title={title}
                    titleClassName='text-4xl sm:text-5xl'
                    description={description}
                    alignLeft
                    popColor={popColor}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-16 mt-12">
                    {/* Email Section */}
                    <div className="flex flex-col items-start space-y-4">
                        <div className="p-3 rounded-full" style={{ backgroundColor: iconBackground }}>
                            <MdEmail className="w-6 h-6" style={{ color: popColor }} />
                        </div>
                        <h3 className="text-xl font-semibold">Email</h3>
                        <p className="text-gray-600 mb-4">
                            Send us an email and we'll get back to you within 24 hours.
                        </p>
                        <ProgressiveButton
                            href={`mailto:${email}`}
                            variant="default"
                            size="lg"
                            className={`text-md border border-transparent hover:border-[${popColor}]`}
                            style={{ backgroundColor: popColor }}
                            hoverEffect={hoverEffect}
                            hoverColor={lighterColor}
                        >
                            {email}
                        </ProgressiveButton>
                    </div>

                    {/* Live Chat Section */}
                    {chatEnabled && (
                        <div className="flex flex-col items-start space-y-4">
                            <div className="p-3 rounded-full" style={{ backgroundColor: iconBackground }}>
                                <MdChat className="w-6 h-6" style={{ color: popColor }} />
                            </div>
                            <h3 className="text-xl font-semibold">Live chat</h3>
                            <p className="text-gray-600 mb-4">
                                Chat with our support team in real-time for immediate assistance.
                            </p>
                            <ProgressiveButton 
                                href={chatUrl}
                                variant="default"
                                size="lg"
                                className="text-md hover:text-black border border-transparent hover:border-black" 
                                style={{ backgroundColor: lighterColor }}
                                hoverEffect={hoverEffect}
                                hoverColor={backgroundColor}
                            >
                                Start new chat
                            </ProgressiveButton>
                        </div>
                    )}

                    {/* Phone Section */}
                    <div className="flex flex-col items-start space-y-4">
                        <div className="p-3 rounded-full" style={{ backgroundColor: iconBackground }}>
                            <MdPhone className="w-6 h-6" style={{ color: popColor }} />
                        </div>
                        <h3 className="text-xl font-semibold">Phone</h3>
                        <p className="text-gray-600 mb-4">
                            Call us during business hours for immediate support.
                        </p>
                        <ProgressiveButton
                            href={`tel:${phone}`}
                            variant="default"
                            size="lg"
                            className="text-md hover:text-black border border-transparent hover:border-black " 
                            style={{ backgroundColor: lighterColor }}
                            hoverEffect={hoverEffect}
                            hoverColor={backgroundColor}
                        >
                            {phone}
                        </ProgressiveButton>
                    </div>

                    {/* Office Section */}
                    <div className="flex flex-col items-start space-y-4">
                        <div className="p-3 rounded-full" style={{ backgroundColor: iconBackground }}>
                            <MdLocationOn className="w-6 h-6" style={{ color: popColor }} />
                        </div>
                        <h3 className="text-xl font-semibold">Office</h3>
                        <p className="text-gray-600 mb-4">
                            Visit our office during business hours for in-person assistance.
                        </p>
                        <ProgressiveButton
                            href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                            variant="default"
                            size="lg"
                            className="text-md hover:text-black border border-transparent hover:border-black " 
                            style={{ backgroundColor: lighterColor }}
                            hoverEffect={hoverEffect}
                            hoverColor={backgroundColor}
                        >
                            Directions
                        </ProgressiveButton>
                    </div>
                </div>
            </div>
        </section>
    );
} 