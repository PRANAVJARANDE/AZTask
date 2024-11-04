const courseContent = {
    chapters: [
      {
        id: 1,
        title: "Chapter 1",
        duration: "05:00:00",
        parts: [
          {
            id: 0,
            title: "Lorem Ipsum Dolor Sit Amet",
            duration: "02:00:00",
            difficulty: "Medium",
            points: 5,
            completion: "45",
            content: [
              {
                type: "video",
                id: "video_1",
                title: "Video 1",
                duration: "10:00",
                url: "/videos/chapter1-video1"
              },
              {
                type: "article",
                id: "article_1",
                title: "Article 1",
                duration: "10:00",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                type: "quiz",
                id: "quiz_1",
                title: "Quiz 1",
                duration: "10:00",
                questions: [
                  {
                    id: 1,
                    question: "Lorem ipsum dolor sit amet?",
                    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                    correctAnswer: 0
                  }
                ]
              },
              {
                type: "coding",
                id: "coding_1",
                title: "Coding Exercise 1",
                duration: "10:00",
                problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                testCases: [
                  {
                    input: "test input 1",
                    output: "expected output 1"
                  }
                ]
              },
              {
                type: "resource",
                id: "resource_1",
                title: "Combined Resource 1",
                duration: "10:00",
                url: "/resources/chapter1-resource1"
              }
            ]
          },
          {
            id: 1,
            title: "Lorem Ipsum Dolor Sit Amet",
            duration: "02:00:00",
            difficulty: "Medium",
            points: 12,
            completion: "20",
            content: [
              {
                type: "video",
                id: "video_2",
                title: "Video 1",
                duration: "10:00",
                url: "/videos/chapter1-part2-video1"
              },
              {
                type: "article",
                id: "article_2",
                title: "Article 1",
                duration: "10:00",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                type: "quiz",
                id: "quiz_2",
                title: "Quiz 1",
                duration: "10:00",
                questions: [
                  {
                    id: 1,
                    question: "Lorem ipsum dolor sit amet?",
                    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                    correctAnswer: 0
                  }
                ]
              },
              {
                type: "coding",
                id: "coding_2",
                title: "Coding Exercise 1",
                duration: "10:00",
                problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                testCases: [
                  {
                    input: "test input 1",
                    output: "expected output 1"
                  }
                ]
              },
              {
                type: "resource",
                id: "resource_2",
                title: "Combined Resource 1",
                duration: "10:00",
                url: "/resources/chapter1-part2-resource1"
              }
            ]
          },
          {
            id: 2,
            title: "Lorem Ipsum Dolor Sit Amet",
            duration: "02:00:00",
            difficulty: "Medium",
            points: 12,
            completion: "0",
            content: [
              {
                type: "video",
                id: "video_3",
                title: "Video 1",
                duration: "10:00",
                url: "/videos/chapter1-part3-video1"
              },
              {
                type: "article",
                id: "article_3",
                title: "Article 1",
                duration: "10:00",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                type: "quiz",
                id: "quiz_3",
                title: "Quiz 1",
                duration: "10:00",
                questions: [
                  {
                    id: 1,
                    question: "Lorem ipsum dolor sit amet?",
                    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                    correctAnswer: 0
                  }
                ]
              },
              {
                type: "coding",
                id: "coding_3",
                title: "Coding Exercise 1",
                duration: "10:00",
                problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                testCases: [
                  {
                    input: "test input 1",
                    output: "expected output 1"
                  }
                ]
              },
              {
                type: "resource",
                id: "resource_3",
                title: "Combined Resource 1",
                duration: "10:00",
                url: "/resources/chapter1-part3-resource1"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Chapter 2",
        duration: "04:30:00",
        parts: [
          {
            id: 0,
            title: "Consectetur Adipiscing Elit",
            duration: "01:30:00",
            difficulty: "Hard",
            points: 8,
            completion: "0",
            content: [
              {
                type: "video",
                id: "video_2_1",
                title: "Video 1",
                duration: "10:00",
                url: "/videos/chapter2-video1"
              },
              {
                type: "article",
                id: "article_2_1",
                title: "Article 1",
                duration: "10:00",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                type: "quiz",
                id: "quiz_2_1",
                title: "Quiz 1",
                duration: "10:00",
                questions: [
                  {
                    id: 1,
                    question: "Lorem ipsum dolor sit amet?",
                    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                    correctAnswer: 0
                  }
                ]
              },
              {
                type: "coding",
                id: "coding_2_1",
                title: "Coding Exercise 1",
                duration: "10:00",
                problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                testCases: [
                  {
                    input: "test input 1",
                    output: "expected output 1"
                  }
                ]
              },
              {
                type: "resource",
                id: "resource_2_1",
                title: "Combined Resource 1",
                duration: "10:00",
                url: "/resources/chapter2-resource1"
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Chapter 3",
        duration: "06:00:00",
        parts: [
          {
            id: 0,
            title: "Sed Do Eiusmod Tempor",
            duration: "02:00:00",
            difficulty: "Easy",
            points: 4,
            completion: "0",
            content: [
              {
                type: "video",
                id: "video_3_1",
                title: "Video 1",
                duration: "10:00",
                url: "/videos/chapter3-video1"
              },
              {
                type: "article",
                id: "article_3_1",
                title: "Article 1",
                duration: "10:00",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                type: "quiz",
                id: "quiz_3_1",
                title: "Quiz 1",
                duration: "10:00",
                questions: [
                  {
                    id: 1,
                    question: "Lorem ipsum dolor sit amet?",
                    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                    correctAnswer: 0
                  }
                ]
              },
              {
                type: "coding",
                id: "coding_3_1",
                title: "Coding Exercise 1",
                duration: "10:00",
                problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                testCases: [
                  {
                    input: "test input 1",
                    output: "expected output 1"
                  }
                ]
              },
              {
                type: "resource",
                id: "resource_3_1",
                title: "Combined Resource 1",
                duration: "10:00",
                url: "/resources/chapter3-resource1"
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Chapter 4",
        duration: "05:30:00",
        parts: [
          {
            id: 0,
            title: "Ut Labore Et Dolore",
            duration: "01:45:00",
            difficulty: "Medium",
            points: 6,
            completion: "0",
            content: [
              {
                type: "video",
                id: "video_4_1",
                title: "Video 1",
                duration: "10:00",
                url: "/videos/chapter4-video1"
              },
              {
                type: "article",
                id: "article_4_1",
                title: "Article 1",
                duration: "10:00",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                type: "quiz",
                id: "quiz_4_1",
                title: "Quiz 1",
                duration: "10:00",
                questions: [
                  {
                    id: 1,
                    question: "Lorem ipsum dolor sit amet?",
                    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                    correctAnswer: 0
                  }
                ]
              },
              {
                type: "coding",
                id: "coding_4_1",
                title: "Coding Exercise 1",
                duration: "10:00",
                problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                testCases: [
                  {
                    input: "test input 1",
                    output: "expected output 1"
                  }
                ]
              },
              {
                type: "resource",
                id: "resource_4_1",
                title: "Combined Resource 1",
                duration: "10:00",
                url: "/resources/chapter4-resource1"
              }
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Chapter 5",
        duration: "05:00:00",
        parts: [
          {
            id: 0,
            title: "Magna Aliqua Ut Enim",
            duration: "02:15:00",
            difficulty: "Hard",
            points: 10,
            completion: "0",
            content: [
              {
                type: "video",
                id: "video_5_1",
                title: "Video 1",
                duration: "10:00",
                url: "/videos/chapter5-video1"
              },
              {
                type: "article",
                id: "article_5_1",
                title: "Article 1",
                duration: "10:00",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                type: "quiz",
                id: "quiz_5_1",
                title: "Quiz 1",
                duration: "10:00",
                questions: [
                  {
                    id: 1,
                    question: "Lorem ipsum dolor sit amet?",
                    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                    correctAnswer: 0
                  }
                ]
              },
              {
                type: "coding",
                id: "coding_5_1",
                title: "Coding Exercise 1",
                duration: "10:00",
                problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                testCases: [
                  {
                    input: "test input 1",
                    output: "expected output 1"
                  }
                ]
              },
              {
                type: "resource",
                id: "resource_5_1",
                title: "Combined Resource 1",
                duration: "10:00",
                url: "/resources/chapter5-resource1"
              }
            ]
          }
        ]
      }
    ]
  };
  
  export default courseContent;