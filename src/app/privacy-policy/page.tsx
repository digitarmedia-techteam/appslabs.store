import React from 'react';

export const metadata = {
    title: 'Privacy Policy | MintX',
    description: 'Privacy Policy for MintX - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Privacy Policy for MintX
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                    Last updated: February 05, 2026
                </p>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        This Privacy Policy describes how [Your Name/Company Name] ("we", "us", or "our")
                        collects, uses, and discloses your information when you use our mobile application,
                        MintX (the "App").
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 mb-8">
                        By using the App, you agree to the collection and use of information in accordance
                        with this policy.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            1. Information We Collect
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            We utilize several third-party services to improve the functionality and experience
                            of our App. The types of information collected include:
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                            A. Personal Information
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            We may ask for personal information that can be used to contact or identify you
                            ("Personal Data"). This includes, but is not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                            <li>
                                <strong>Phone Number:</strong> Used for OTP authentication via Firebase Phone Auth to secure your
                                account.
                            </li>
                            <li>
                                <strong>Email Address:</strong> Used for Google Sign-In and account recovery.
                            </li>
                            <li>
                                <strong>Profile Name & Age:</strong> Used to personalize your profile and ensure age-appropriate
                                content.
                            </li>
                            <li>
                                <strong>Wallet & Transaction History:</strong> We store data regarding your in-app currency
                                ("Mints") earnings and reward redemptions to facilitate the Rewards Store
                                functionality.
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                            B. Device & Usage Information
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            When you access the App, we may collect certain information automatically,
                            including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Device type (e.g., Samsung Galaxy, Pixel)</li>
                            <li>Operating system version (e.g., Android 14)</li>
                            <li>Unique Device Identifiers (Device ID, Advertising ID)</li>
                            <li>IP Address</li>
                            <li>App usage data (e.g., time spent, quizzes played, features used)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            2. How We Use Your Information
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            We use the collected data for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>
                                <strong>To verify your identity:</strong> Ensuring that you are the owner of the account via OTP or
                                Google Sign-In.
                            </li>
                            <li>
                                <strong>To provide the Service:</strong> Managing your quiz progress, level status, and wallet
                                balance.
                            </li>
                            <li>
                                <strong>To process Redemptions:</strong> Verifying reward claims in the Rewards Store and processing
                                requests.
                            </li>
                            <li>
                                <strong>To show Advertisements:</strong> Serving relevant ads through Google AdMob to support the
                                free functionality of the App.
                            </li>
                            <li>
                                <strong>To improve the App:</strong> Analyzing usage trends to fix bugs and enhance user experience.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            3. Third-Party Services
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            We use third-party services that may collect information used to identify you.
                            Below are the links to the privacy policies of the third-party service providers
                            used by the App:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>
                                <a
                                    href="https://policies.google.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Google Play Services: Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://firebase.google.com/support/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Firebase (Analytics, Auth, Firestore, Crashlytics): Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://support.google.com/admob/answer/6128543"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    AdMob (Google): Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            4. Log Data
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            In case of an error in the App, we collect data and information (through
                            third-party products like Firebase Crashlytics) on your phone called Log Data. This
                            Log Data may include information such as your device Internet Protocol ("IP")
                            address, device name, operating system version, the configuration of the app
                            when utilizing our Service, the time and date of your use of the Service, and other
                            statistics.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            5. Security
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            We value your trust in providing us your Personal Information, thus we are striving
                            to use commercially acceptable means of protecting it. But remember that no method
                            of transmission over the internet, or method of electronic storage is 100% secure
                            and reliable, and we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            6. Children's Privacy
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            These Services do not address anyone under the age of 13. We do not knowingly
                            collect personally identifiable information from children under 13. In the case we
                            discover that a child under 13 has provided us with personal information, we
                            immediately delete this from our servers. If you are a parent or guardian and you
                            are aware that your child has provided us with personal information, please contact
                            us so that we will be able to do the necessary actions.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            7. Changes to This Privacy Policy
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            We may update our Privacy Policy from time to time. Thus, you are advised to review
                            this page periodically for any changes. We will notify you of any changes by
                            posting the new Privacy Policy on this page. These changes are effective
                            immediately after they are posted on this page.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            8. Contact Us
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            If you have any questions or suggestions about our Privacy Policy, do not hesitate
                            to contact us at:
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-4">
                            <a
                                href="mailto:support@appslabs.store"
                                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                            >
                                support@appslabs.store
                            </a>
                        </p>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                        © 2026 MintX. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
