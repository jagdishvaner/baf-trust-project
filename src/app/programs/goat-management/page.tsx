'use client';

import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    CheckCircle,
    Clock,
    Users,
    Award,
    BookOpen,
    TrendingUp,
    Shield,
    Heart,
    Phone,
    Target,
    DollarSign,
    Zap,
} from 'lucide-react';

export default function GoatManagementPage() {
    const programHighlights = [
        {
            icon: Target,
            title: "गॉट फार्म मैनेजमेंट कोर्स",
            description: "5+ वीडियो के साथ व्यापक गॉट फार्म प्रबंधन प्रशिक्षण",
            features: ["5+ प्रशिक्षण वीडियो", "व्यावहारिक प्रबंधन तकनीक", "फार्म संचालन गाइड"]
        },
        {
            icon: Shield,
            title: "स्वास्थ्य प्रबंधन",
            description: "बकरियों के स्वास्थ्य और देखभाल की संपूर्ण जानकारी",
            features: ["रोग निवारण", "टीकाकरण कार्यक्रम", "आपातकालीन देखभाल"]
        },
        {
            icon: TrendingUp,
            title: "व्यापार प्रबंधन",
            description: "लाभदायक गॉट फार्म व्यापार के लिए प्रबंधन रणनीति",
            features: ["लागत प्रबंधन", "उत्पादकता वृद्धि", "लाभ अनुकूलन"]
        },
        {
            icon: Heart,
            title: "व्यावहारिक प्रशिक्षण",
            description: "वास्तविक फार्म अनुभव और हैंड्स-ऑन ट्रेनिंग",
            features: ["लाइव डेमोंस्ट्रेशन", "फील्ड विजिट", "व्यावहारिक अभ्यास"]
        }
    ];

    const benefits = [
        {
            icon: DollarSign,
            title: "किफायती कोर्स",
            description: "केवल ₹999 में संपूर्ण गॉट फार्म मैनेजमेंट सीखें"
        },
        {
            icon: Clock,
            title: "त्वरित सीखना",
            description: "कम समय में अधिकतम ज्ञान प्राप्त करें"
        },
        {
            icon: TrendingUp,
            title: "प्रैक्टिकल नॉलेज",
            description: "व्यावहारिक ज्ञान जो तुरंत लागू किया जा सकता है"
        },
        {
            icon: Shield,
            title: "विशेषज्ञ मार्गदर्शन",
            description: "अनुभवी विशेषज्ञों से सीधा मार्गदर्शन"
        }
    ];

    const successStories = [
        {
            name: "राम कुमार",
            location: "राजस्थान",
            income: "बेहतर प्रबंधन",
            story: "गॉट फार्म मैनेजमेंट कोर्स के बाद मेरे फार्म की उत्पादकता 40% बढ़ गई।"
        },
        {
            name: "सुनीता शर्मा",
            location: "हरियाणा",
            income: "लागत में कमी",
            story: "बेहतर प्रबंधन तकनीकों से मेरी फार्म की लागत 30% कम हो गई।"
        },
        {
            name: "विकास पटेल",
            location: "गुजरात",
            income: "गुणवत्ता सुधार",
            story: "कोर्स के बाद मेरे बकरियों की गुणवत्ता और स्वास्थ्य में काफी सुधार हुआ।"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-emerald-900/30 py-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center mb-6">
                                <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 px-4 py-2">
                                    🐐 प्रबंधन कोर्स
                                </Badge>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                <span className="text-emerald-600">गॉट फार्म</span> मैनेजमेंट कोर्स
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                नमस्कार किसान भाइयों! हमारे "Nisar Indian किसान साथी" ऐप के माध्यम से गॉट फार्म मैनेजमेंट की संपूर्ण जानकारी प्राप्त करें।
                                5+ वीडियो के साथ व्यावहारिक प्रबंधन तकनीक सीखें। (नोट: इस कोर्स में प्रमाण पत्र नहीं मिलेगा)
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-emerald-600">5+</div>
                                    <div className="text-sm text-muted-foreground">वीडियो</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-emerald-600">₹999</div>
                                    <div className="text-sm text-muted-foreground">कोर्स फीस</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-emerald-600">प्रैक्टिकल</div>
                                    <div className="text-sm text-muted-foreground">ज्ञान</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-emerald-600">विशेषज्ञ</div>
                                    <div className="text-sm text-muted-foreground">मार्गदर्शन</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                                    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.nisarindian.classes', '_blank')}
                                >
                                    <BookOpen className="mr-2 h-5 w-5" />
                                    अभी डाउनलोड करें
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3"
                                    onClick={() => window.open('https://wa.me/918079043733?text=मुझे गॉट फार्म मैनेजमेंट कोर्स के बारे में जानकारी चाहिए', '_blank')}
                                >
                                    <Phone className="mr-2 h-5 w-5" />
                                    डेमो के लिए कॉल करें
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-8 text-white shadow-2xl">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🐐</div>
                                    <h3 className="text-2xl font-bold mb-4">आज ही शुरू करें</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="h-5 w-5 mr-2" />
                                            <span>5+ वीडियो ट्रेनिंग</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="h-5 w-5 mr-2" />
                                            <span>केवल ₹999 फीस</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="h-5 w-5 mr-2" />
                                            <span>प्रैक्टिकल नॉलेज</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Benefits */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            गॉट फार्म मैनेजमेंट क्यों सीखें?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            जानिए गॉट फार्म मैनेजमेंट के फायदे और कैसे यह आपके व्यापार को बेहतर बनाता है
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="border-0 bg-card shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                                <CardContent className="p-6 text-center">
                                    <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <benefit.icon className="h-8 w-8 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Highlights */}
            <section className="py-20 bg-accent/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            आप क्या सीखेंगे
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            व्यापक प्रशिक्षण मॉड्यूल जो आपको गॉट फार्म मैनेजमेंट का विशेषज्ञ बनाएंगे
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {programHighlights.map((highlight, index) => (
                            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                                <CardContent className="p-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-emerald-100 rounded-full p-3 flex-shrink-0">
                                            <highlight.icon className="h-8 w-8 text-emerald-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-foreground mb-3">{highlight.title}</h3>
                                            <p className="text-muted-foreground mb-4">{highlight.description}</p>
                                            <div className="space-y-2">
                                                {highlight.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            सफलता की कहानियां
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            वास्तविक किसान, वास्तविक परिणाम। देखें कि हमारे छात्रों ने अपना व्यापार कैसे बेहतर बनाया
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {successStories.map((story, index) => (
                            <Card key={index} className="border-0 bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                                            {story.name.charAt(0)}
                                        </div>
                                        <h3 className="font-bold text-foreground">{story.name}</h3>
                                        <p className="text-sm text-muted-foreground">{story.location}</p>
                                        <Badge className="bg-emerald-600 text-white mt-2">{story.income}</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground text-center italic">
                                        "{story.story}"
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        गॉट फार्म मैनेजमेंट सीखने के लिए तैयार हैं?
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        केवल ₹999 में संपूर्ण गॉट फार्म मैनेजमेंट कोर्स करें और अपने व्यापार को बेहतर बनाएं
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Button
                            size="lg"
                            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3"
                            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.nisarindian.classes', '_blank')}
                        >
                            <BookOpen className="mr-2 h-5 w-5" />
                            अभी डाउनलोड करें - ₹999
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3"
                            onClick={() => window.open('https://wa.me/918079043733?text=मुझे गॉट फार्म मैनेजमेंट कोर्स के बारे में जानकारी चाहिए', '_blank')}
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            कॉल: +91-8079043733
                        </Button>
                    </div>

                    <div className="flex items-center justify-center space-x-6 text-sm opacity-90">
                        <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            केवल ₹999 फीस
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            5+ वीडियो ट्रेनिंग
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            विशेषज्ञ सहायता
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}