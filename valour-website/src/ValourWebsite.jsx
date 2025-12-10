import React, { useState } from 'react';
import { Menu, X, TrendingUp, BookOpen, ShoppingCart, Wrench, ChevronRight, Calendar, User, ArrowRight, Star, CheckCircle } from 'lucide-react';



const ValourWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const Navigation = () => (
    <nav className="fixed top-0 w-full bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-[#1e2d3d] z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00d9ff] to-[#0066ff] rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#0a0e1a]" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#0066ff] bg-clip-text text-transparent">
              Valour.ai
            </span>
          </button>

          <ul className="hidden md:flex gap-8">
            <li><button onClick={() => setCurrentPage('home')} className="text-gray-300 hover:text-[#00d9ff] transition-colors font-medium">Home</button></li>
            <li><button onClick={() => setCurrentPage('blog')} className="text-gray-300 hover:text-[#00d9ff] transition-colors font-medium">Blog</button></li>
            <li><button onClick={() => setCurrentPage('services')} className="text-gray-300 hover:text-[#00d9ff] transition-colors font-medium">Services</button></li>
            <li><button onClick={() => setCurrentPage('products')} className="text-gray-300 hover:text-[#00d9ff] transition-colors font-medium">Products</button></li>
          </ul>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#1e2d3d] pt-4">
            <ul className="flex flex-col gap-4">
              <li><button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="text-gray-300 hover:text-[#00d9ff] transition-colors font-medium w-full text-left">Home</button></li>
              <li><button onClick={() => { setCurrentPage('blog'); setMobileMenuOpen(false); }} className="text-gray-300 hover:text-[#00d9ff] transition-colors font-medium w-full text-left">Blog</button></li>
              <li><button onClick={() => { setCurrentPage('services'); setMobileMenuOpen(false); }} className="text-gray-300 hover:text-[#00d9ff] transition-colors font-medium w-full text-left">Services</button></li>
              <li><button onClick={() => { setCurrentPage('products'); setMobileMenuOpen(false); }} className="text-gray-300 hover:text-[#00d9ff] transition-colors font-medium w-full text-left">Products</button></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-[#0a0e1a] border-t border-[#1e2d3d] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00d9ff] to-[#0066ff] rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#0a0e1a]" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#0066ff] bg-clip-text text-transparent">
              Valour.ai
            </span>
          </div>
          
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">Telegram</a>
            <a href="#" className="text-gray-400 hover:text-[#00d9ff] transition-colors">Portfolio</a>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 Valour.ai. All rights reserved.</p>
            <p className="mt-1">Professional AI Trading Solutions | Custom Bot Development</p>
          </div>
        </div>
      </div>
    </footer>
  );

  const articles = [
    {
      id: 1,
      title: "Getting Started with AI Trading Bots in 2025",
      excerpt: "Learn how to leverage artificial intelligence and machine learning to automate your cryptocurrency trading strategies.",
      category: "Tutorial",
      date: "Dec 8, 2025",
      readTime: "8 min read",
      author: "Valour.ai Team",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      content: "Artificial intelligence has revolutionized the way we approach cryptocurrency trading. In this comprehensive guide, we'll explore how AI-powered trading bots can help you make better trading decisions.\n\nUnderstanding AI Trading Bots\n\nAI trading bots use machine learning algorithms to analyze market data, identify patterns, and execute trades automatically. Unlike traditional bots that follow simple rules, AI bots can adapt to changing market conditions.\n\nKey Components: Neural networks for price prediction, natural language processing for sentiment analysis, reinforcement learning for strategy optimization, and real-time data processing and execution.\n\nGetting Started: Choose your trading platform, define your trading strategy, train your AI model with historical data, backtest thoroughly before live trading, and start with small amounts and scale gradually.\n\nThe future of trading is automated, and AI is leading the way. Start your journey today with Valour.ai's proven solutions."
    },
    {
      id: 2,
      title: "Top 5 Machine Learning Strategies for Crypto Trading",
      excerpt: "Discover the most effective ML algorithms and strategies used by professional crypto traders in today's volatile markets.",
      category: "Strategy",
      date: "Dec 5, 2025",
      readTime: "12 min read",
      author: "Valour.ai Team",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800",
      content: "Machine learning has opened new possibilities for cryptocurrency traders. Here are the top five strategies that professionals are using to gain an edge in the market.\n\n1. LSTM Neural Networks\n\nLong Short-Term Memory networks excel at analyzing time-series data. They can identify complex patterns in price movements that traditional analysis might miss.\n\n2. Reinforcement Learning\n\nThis approach allows trading bots to learn optimal strategies through trial and error, adapting to market conditions in real-time.\n\n3. Sentiment Analysis\n\nNatural language processing analyzes news, social media, and market sentiment to predict price movements before they happen.\n\n4. Ensemble Methods\n\nCombining multiple models often produces better results than any single approach. Random forests and gradient boosting are popular choices.\n\n5. Deep Q-Learning\n\nThis advanced technique combines deep learning with reinforcement learning for superior decision-making in complex market environments.\n\nEach strategy has its strengths, and the best approach often involves combining multiple techniques."
    },
    {
      id: 3,
      title: "Risk Management in Automated Trading: A Complete Guide",
      excerpt: "Essential risk management principles every trader should implement when using automated trading systems.",
      category: "Risk Management",
      date: "Dec 1, 2025",
      readTime: "10 min read",
      author: "Valour.ai Team",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
      content: "Successful trading isn't just about making profits—it's about protecting your capital. Here's everything you need to know about risk management in automated trading.\n\nCore Principles\n\nRisk management is the foundation of sustainable trading. Without proper risk controls, even the best trading strategy will eventually fail.\n\nPosition Sizing: Never risk more than 1-2% of your capital on a single trade. This ensures that a series of losses won't wipe out your account.\n\nStop-Loss Orders: Automated stop-losses are essential. They remove emotion from the equation and protect you from catastrophic losses.\n\nDiversification: Don't put all your eggs in one basket. Spread your capital across different assets, strategies, and timeframes.\n\nDrawdown Management: Understand and plan for drawdowns. Set maximum drawdown limits and have a plan for when they're reached.\n\nRegular Monitoring: Even automated systems need oversight. Review performance regularly and adjust your strategy as needed.\n\nRemember: preservation of capital is just as important as profit generation."
    },
    {
      id: 4,
      title: "The Future of DeFi and Algorithmic Trading",
      excerpt: "Exploring how decentralized finance is transforming algorithmic trading and what it means for the future.",
      category: "Industry Insights",
      date: "Nov 28, 2025",
      readTime: "15 min read",
      author: "Valour.ai Team",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800",
      content: "Decentralized Finance (DeFi) is reshaping the landscape of algorithmic trading. Let's explore the opportunities and challenges ahead.\n\nThe DeFi Revolution\n\nDeFi protocols have introduced unprecedented opportunities for algorithmic traders. Liquidity pools, automated market makers, and yield farming have created new trading strategies.\n\nSmart Contract Trading: Trading bots can now interact directly with smart contracts, eliminating intermediaries and reducing costs.\n\nFlash Loans: These innovative financial instruments allow traders to borrow millions without collateral, opening up arbitrage opportunities previously impossible.\n\nChallenges Ahead: Gas fees can eat into profits, smart contract risks, regulatory uncertainty, and complexity of DeFi protocols.\n\nOpportunities: 24/7 global markets, programmable money, composability of protocols, and transparency and auditability.\n\nThe convergence of AI and DeFi represents the future of trading. Those who adapt early will have a significant advantage."
    },
    {
      id: 5,
      title: "Building Your First Trading Bot: Step-by-Step Tutorial",
      excerpt: "A practical, hands-on guide to creating your first cryptocurrency trading bot from scratch.",
      category: "Tutorial",
      date: "Nov 25, 2025",
      readTime: "20 min read",
      author: "Valour.ai Team",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      content: "Ready to build your first trading bot? This comprehensive tutorial will walk you through every step of the process.\n\nPrerequisites: Basic Python programming knowledge, understanding of cryptocurrency markets, API access to a crypto exchange, and development environment set up.\n\nStep 1: Setting Up Your Environment\n\nInstall necessary libraries: pandas, numpy, ccxt (for exchange connectivity), and ta-lib (for technical analysis).\n\nStep 2: Connecting to an Exchange\n\nUse the exchange's API to fetch market data and place orders. Always start with a testnet or paper trading.\n\nStep 3: Implementing Your Strategy\n\nStart simple. A basic moving average crossover strategy is perfect for beginners.\n\nStep 4: Backtesting\n\nTest your strategy on historical data before risking real money. This is crucial for understanding potential performance.\n\nStep 5: Risk Management\n\nImplement stop-losses, position sizing, and other risk controls before going live.\n\nStep 6: Deployment\n\nDeploy your bot on a reliable server with monitoring and alerting systems.\n\nBuilding a trading bot is a journey. Start simple, test thoroughly, and iterate based on results."
    },
    {
      id: 6,
      title: "Technical Analysis vs AI: Which is Better?",
      excerpt: "Comparing traditional technical analysis with modern AI-driven approaches to market prediction.",
      category: "Analysis",
      date: "Nov 22, 2025",
      readTime: "11 min read",
      author: "Valour.ai Team",
      image: "https://images.unsplash.com/photo-1642790551116-18e150f248e5?w=800",
      content: "The debate between traditional technical analysis and AI-driven trading continues. Let's examine both approaches objectively.\n\nTraditional Technical Analysis\n\nTechnical analysis has been the foundation of trading for decades. Chart patterns, indicators, and support/resistance levels guide trading decisions.\n\nStrengths: Well-understood and documented, works across different markets, can be learned and mastered, and human intuition plays a role.\n\nLimitations: Subjective interpretation, lagging indicators, doesn't adapt to changing markets, and limited data processing capability.\n\nAI-Driven Trading\n\nArtificial intelligence analyzes vast amounts of data to identify patterns humans might miss.\n\nStrengths: Processes unlimited data points, adapts to market changes, removes emotional bias, and can identify complex patterns.\n\nLimitations: Requires significant data, can overfit historical data, black box decision-making, and needs continuous monitoring.\n\nThe Best Approach\n\nThe truth is, combining both methods often yields the best results. Use AI for data analysis and pattern recognition, while applying human judgment for risk management and strategic decisions."
    }
  ];

  const services = [
    {
      icon: "🤖",
      title: "Custom Trading Bot Development",
      description: "Bespoke AI-powered trading bots designed specifically for your strategy and requirements.",
      features: [
        "Deep Learning & Neural Networks",
        "Multi-timeframe Analysis",
        "Real-time Execution",
        "Risk Management Integration",
        "Backtesting & Optimization"
      ],
      price: "Starting at $5,000"
    },
    {
      icon: "📊",
      title: "AI-Based Strategy Design",
      description: "Develop and optimize trading strategies using machine learning and advanced analytics.",
      features: [
        "Machine Learning Models",
        "Strategy Optimization",
        "Pattern Recognition",
        "Sentiment Analysis",
        "Performance Analytics"
      ],
      price: "Starting at $3,000"
    },
    {
      icon: "⚙️",
      title: "Automation & Integration",
      description: "Seamlessly integrate trading bots with your existing infrastructure and workflows.",
      features: [
        "Exchange API Integration",
        "Cloud Deployment",
        "24/7 Monitoring",
        "Alert Systems",
        "Portfolio Management"
      ],
      price: "Starting at $2,500"
    },
    {
      icon: "🎯",
      title: "Strategy Consulting",
      description: "Expert consultation on trading strategies, risk management, and portfolio optimization.",
      features: [
        "One-on-one Sessions",
        "Strategy Review",
        "Risk Assessment",
        "Performance Analysis",
        "Ongoing Support"
      ],
      price: "$500/hour"
    }
  ];

  const products = [
    {
      tag: "Crypto",
      icon: "₿",
      title: "Crypto Trading Bot Pro",
      description: "Advanced cryptocurrency trading bot with multi-exchange support and deep learning predictions.",
      features: [
        "LSTM Neural Network",
        "Multi-timeframe analysis",
        "Binance, Bybit, Coinbase support",
        "Risk management built-in",
        "Real-time alerts"
      ],
      price: "$2,499",
      popular: true
    },
    {
      tag: "Forex",
      icon: "💱",
      title: "Forex AI Trader",
      description: "Intelligent forex trading system utilizing machine learning for currency pair analysis.",
      features: [
        "Deep learning models",
        "Major pairs coverage",
        "MetaTrader integration",
        "Sentiment analysis",
        "News-based trading"
      ],
      price: "$1,999",
      popular: false
    },
    {
      tag: "Stocks",
      icon: "📈",
      title: "Stock Market Predictor",
      description: "AI-powered stock prediction and trading system with high accuracy forecasting.",
      features: [
        "98% prediction accuracy",
        "Time series analysis",
        "Technical indicators",
        "Fundamental analysis",
        "Portfolio optimization"
      ],
      price: "$2,999",
      popular: false
    },
    {
      tag: "Course",
      icon: "🎓",
      title: "AI Trading Masterclass",
      description: "Comprehensive course on building and deploying AI-powered trading systems.",
      features: [
        "20+ hours of video content",
        "Python code examples",
        "Real-world case studies",
        "Community access",
        "Lifetime updates"
      ],
      price: "$499",
      popular: true
    },
    {
      tag: "Strategy",
      icon: "🎯",
      title: "Strategy Optimizer",
      description: "ML framework for optimizing trading strategy combinations using genetic algorithms.",
      features: [
        "Genetic algorithms",
        "Backtest analysis",
        "95%+ accuracy",
        "Drawdown minimization",
        "Cross-validation"
      ],
      price: "$1,499",
      popular: false
    },
    {
      tag: "Tools",
      icon: "🛠️",
      title: "Trading Toolkit Bundle",
      description: "Complete set of tools for traders including indicators, analyzers, and utilities.",
      features: [
        "50+ custom indicators",
        "Market scanner",
        "Portfolio tracker",
        "Alert system",
        "API access"
      ],
      price: "$799",
      popular: false
    }
  ];

  const HomePage = () => (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-full text-[#00d9ff] text-sm font-semibold mb-8">
            🚀 Custom AI Trading Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#00d9ff] to-[#0066ff] bg-clip-text text-transparent">
              AI-Powered Trading
            </span>
            <br />
            Strategies & Automation
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Custom-built bots and trading systems for crypto, forex, and stocks. Professional algorithmic trading solutions designed for maximum performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => setCurrentPage('services')}
              className="px-8 py-4 bg-gradient-to-r from-[#00d9ff] to-[#0066ff] text-[#0a0e1a] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00d9ff]/50 transition-all flex items-center justify-center gap-2"
            >
              View Services <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setCurrentPage('products')}
              className="px-8 py-4 bg-transparent border-2 border-[#1e2d3d] text-white font-semibold rounded-xl hover:border-[#00d9ff] hover:bg-[#00d9ff]/10 transition-all"
            >
              View Products
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#1a2332] border border-[#1e2d3d] rounded-2xl p-6 hover:border-[#00d9ff] transition-all hover:shadow-lg hover:shadow-[#00d9ff]/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#0066ff] bg-clip-text text-transparent mb-2">
                6,000+
              </div>
              <div className="text-gray-400 text-sm">Active Users Served</div>
            </div>
            <div className="bg-[#1a2332] border border-[#1e2d3d] rounded-2xl p-6 hover:border-[#00d9ff] transition-all hover:shadow-lg hover:shadow-[#00d9ff]/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#0066ff] bg-clip-text text-transparent mb-2">
                30%
              </div>
              <div className="text-gray-400 text-sm">Peak Monthly Returns</div>
            </div>
            <div className="bg-[#1a2332] border border-[#1e2d3d] rounded-2xl p-6 hover:border-[#00d9ff] transition-all hover:shadow-lg hover:shadow-[#00d9ff]/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#0066ff] bg-clip-text text-transparent mb-2">
                2 Years
              </div>
              <div className="text-gray-400 text-sm">Profitable Operations</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f1729]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#00d9ff] text-sm font-bold uppercase tracking-wider mb-4">Why Choose Valour.ai</div>
            <h2 className="text-4xl font-bold mb-4">Built for Professional Traders</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Advanced AI technology combined with proven trading strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🏆", title: "Proven Track Record", desc: "2 years of profitable operations with 9% average drawdown" },
              { icon: "🤖", title: "Advanced AI Technology", desc: "Deep learning models with real-time market analysis" },
              { icon: "🌍", title: "Global Reach", desc: "Serving clients across multiple markets and continents" }
            ].map((item, i) => (
              <div key={i} className="bg-[#1a2332] border border-[#1e2d3d] rounded-2xl p-8 text-center hover:border-[#00d9ff] transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const BlogPage = () => (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#00d9ff] text-sm font-bold uppercase tracking-wider mb-4">Knowledge Hub</div>
          <h1 className="text-5xl font-bold mb-4">Trading Insights & Guides</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expert articles on AI trading, cryptocurrency, and algorithmic strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id}
              onClick={() => {
                setSelectedArticle(article);
                setCurrentPage('article');
              }}
              className="bg-[#1a2332] border border-[#1e2d3d] rounded-2xl overflow-hidden hover:border-[#00d9ff] transition-all hover:-translate-y-2 cursor-pointer group"
            >
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${article.image})`}}>
                <div className="w-full h-full bg-gradient-to-t from-[#1a2332] to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-full text-[#00d9ff] text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#00d9ff] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ArticlePage = () => {
    if (!selectedArticle) return <BlogPage />;

    return (
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setCurrentPage('blog')}
            className="flex items-center gap-2 text-[#00d9ff] mb-8 hover:gap-3 transition-all"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            Back to Blog
          </button>

          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-full text-[#00d9ff] text-sm font-semibold">
                {selectedArticle.category}
              </span>
              <span className="text-gray-500">{selectedArticle.readTime}</span>
              <span className="text-gray-500">{selectedArticle.date}</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">{selectedArticle.title}</h1>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00d9ff] to-[#0066ff] rounded-full flex items-center justify-center font-bold text-[#0a0e1a]">
                V
              </div>
              <div>
                <div className="font-semibold">{selectedArticle.author}</div>
                <div className="text-gray-500 text-sm">AI Trading Expert</div>
              </div>
            </div>
          </div>

          <div className="h-96 rounded-2xl bg-cover bg-center mb-12" style={{backgroundImage: `url(${selectedArticle.image})`}}>
            <div className="w-full h-full bg-gradient-to-t from-[#0f1729] to-transparent rounded-2xl" />
          </div>

          <div className="prose prose-invert max-w-none">
            {selectedArticle.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-gray-300 text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 p-8 bg-[#1a2332] border border-[#1e2d3d] rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Trading?</h3>
            <p className="text-gray-400 mb-6">
              Explore our AI-powered trading solutions and take your trading to the next level.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setCurrentPage('products')}
                className="px-6 py-3 bg-gradient-to-r from-[#00d9ff] to-[#0066ff] text-[#0a0e1a] font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                View Products
              </button>
              <button 
                onClick={() => setCurrentPage('services')}
                className="px-6 py-3 bg-transparent border-2 border-[#1e2d3d] text-white font-semibold rounded-lg hover:border-[#00d9ff] transition-all"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ServicesPage = () => (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#00d9ff] text-sm font-bold uppercase tracking-wider mb-4">Our Services</div>
          <h1 className="text-5xl font-bold mb-4">Custom Trading Solutions</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end development of intelligent trading systems tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-[#1a2332] border border-[#1e2d3d] rounded-2xl p-8 hover:border-[#00d9ff] transition-all hover:-translate-y-2 group">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00d9ff] transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-[#1e2d3d]">
                <span className="text-2xl font-bold text-[#00d9ff]">{service.price}</span>
                <button className="px-6 py-3 bg-gradient-to-r from-[#00d9ff] to-[#0066ff] text-[#0a0e1a] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d9ff]/50 transition-all">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-[#00d9ff]/10 to-[#0066ff]/10 border border-[#00d9ff]/30 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We specialize in building completely custom trading solutions. Contact us to discuss your unique requirements.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#00d9ff] to-[#0066ff] text-[#0a0e1a] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00d9ff]/50 transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );

  const ProductsPage = () => (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#00d9ff] text-sm font-bold uppercase tracking-wider mb-4">Ready-Made Solutions</div>
          <h1 className="text-5xl font-bold mb-4">Trading Bots & Products</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pre-built, tested trading systems ready for deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className={`bg-[#1a2332] border rounded-2xl p-8 hover:border-[#00d9ff] transition-all hover:-translate-y-2 group relative ${product.popular ? 'border-[#00d9ff]' : 'border-[#1e2d3d]'}`}>
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#00d9ff] to-[#0066ff] text-[#0a0e1a] text-sm font-bold rounded-full">
                  POPULAR
                </div>
              )}
              
              <div className="flex items-start justify-between mb-6">
                <span className="px-3 py-1 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-lg text-[#00d9ff] text-xs font-bold uppercase">
                  {product.tag}
                </span>
                <span className="text-4xl">{product.icon}</span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00d9ff] transition-colors">{product.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>
              
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-300 text-sm">
                    <ArrowRight className="w-4 h-4 text-[#00d9ff] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-[#1e2d3d]">
                <div className="text-3xl font-bold text-[#00d9ff] mb-4">{product.price}</div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#00d9ff] to-[#0066ff] text-[#0a0e1a] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d9ff]/50 transition-all">
                  Request Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a2332] border border-[#1e2d3d] rounded-xl p-6 text-center">
            <Star className="w-12 h-12 text-[#00d9ff] mx-auto mb-4" />
            <h4 className="font-bold mb-2">Premium Support</h4>
            <p className="text-gray-400 text-sm">24/7 technical support for all products</p>
          </div>
          <div className="bg-[#1a2332] border border-[#1e2d3d] rounded-xl p-6 text-center">
            <CheckCircle className="w-12 h-12 text-[#10b981] mx-auto mb-4" />
            <h4 className="font-bold mb-2">Lifetime Updates</h4>
            <p className="text-gray-400 text-sm">Free updates and improvements forever</p>
          </div>
          <div className="bg-[#1a2332] border border-[#1e2d3d] rounded-xl p-6 text-center">
            <ShoppingCart className="w-12 h-12 text-[#00d9ff] mx-auto mb-4" />
            <h4 className="font-bold mb-2">Money-Back Guarantee</h4>
            <p className="text-gray-400 text-sm">30-day refund if not satisfied</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#0a0e1a] text-white min-h-screen">
      <Navigation />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'blog' && <BlogPage />}
      {currentPage === 'article' && <ArticlePage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'products' && <ProductsPage />}
      
      <Footer />
    </div>
  );
};

export default ValourWebsite