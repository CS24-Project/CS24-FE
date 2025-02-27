import { AnswerItemProps } from '@/components/Answer/AnswerItem';

export const answerDatas: AnswerItemProps[] = [
	{
		questionNumber: 1,
		isCorrect: true,
		questionText: '다음 중 운영체제(OS)에서 멀티프로세싱(Multiprocessing)에 대한 설명으로 올바른 것은?',
		options: [
			'1. 멀티프로세싱은 하나의 CPU에서 여러 개의 스레드를 실행하는 기법이다.',
			'2. 멀티프로세싱은 하나의 프로세스 내에서 여러 개의 스레드를 실행하는 방식이다.',
			'3. 멀티프로세싱은 여러 개의 CPU 또는 코어에서 여러 개의 프로세스를 실행하는 방식이다.',
			'4. 멀티프로세싱은 프로세스 간의 메모리 공유가 불가능하다.',
		],
		userAnswer: '3. 멀티프로세싱은 여러 개의 CPU 또는 코어에서 여러 개의 프로세스를 실행하는 방식이다.',
		explanation: {
			correct: [
				'멀티프로세싱(Multiprocessing)은 여러 개의 코어를 활용하는 것이므로, 단일 코어에서 여러 프로세스를 실행하는 방식은 아닙니다.',
			],
			wrong: [
				'1, 2번: 멀티스레딩(Multithreading)에 대한 설명이다.',
				'4번: 기본적으로 각 프로세스는 독립된 메모리 공간을 가지지만, 공유 메모리(Shared Memory)나 파이프(Pipes), 메시지 큐(Message Queue) 같은 IPC(Inter-Process Communication) 기법을 사용하면 데이터를 공유할 수 있다.',
			],
		},
	},
	{
		questionNumber: 2,
		isCorrect: true,
		questionText: '다음 중 운영체제(OS)에서 스레드(Thread)에 대한 설명으로 올바른 것은?',
		options: [
			'1. 스레드는 프로세스와는 독립적으로 실행되는 단위이다.',
			'2. 스레드는 프로세스 내에서만 실행될 수 있다.',
			'3. 스레드는 프로세스보다 더 많은 자원을 소모한다.',
			'4. 스레드는 메모리를 공유하지 않는다.',
		],
		userAnswer: '2. 스레드는 프로세스 내에서만 실행될 수 있다.',
		explanation: {
			correct: [
				'스레드는 프로세스의 실행 단위로, 반드시 하나의 프로세스에 속해있어야 합니다.',
				'• 스레드는 프로세스의 자원을 공유하며 실행됩니다.',
				'• 같은 프로세스 내의 스레드들은 코드(Code), 데이터(Data), 힙(Heap) 영역을 공유하지만, 각 스레드는 독립적인 스택(Stack) 영역을 가집니다.',
			],
			wrong: [
				'1번: 스레드는 프로세스에 종속적입니다.',
				'3번: 스레드는 프로세스보다 적은 자원을 사용합니다. 스레드는 스택(Stack) 영역만 독립적으로 가집니다.',
				'4번: 같은 프로세스 내의 스레드들은 메모리를 공유합니다.',
			],
		},
	},
	{
		questionNumber: 3,
		isCorrect: true,
		questionText: '다음 중 운영체제(OS)에서 컨텍스트 스위칭(Context Switching)에 대한 설명으로 올바른 것은?',
		options: [
			'1. 컨텍스트 스위칭은 프로세스 간의 메모리 공유를 의미한다.',
			'2. 컨텍스트 스위칭은 CPU가 동시에 여러 프로세스를 실행하는 것이다.',
			'3. 컨텍스트 스위칭은 프로세스의 상태를 저장하고 불러오는 과정이다.',
			'4. 컨텍스트 스위칭은 프로세스 간의 통신을 의미한다.',
		],
		userAnswer: '3. 컨텍스트 스위칭은 프로세스의 상태를 저장하고 불러오는 과정이다.',
		explanation: {
			correct: [
				'컨텍스트 스위칭은 현재 실행 중인 프로세스의 상태를 PCB(Process Control Block)에 저장하고, 다음 실행할 프로세스의 상태를 PCB에서 불러와 복원하는 과정입니다.',
				'• 이를 통해 CPU는 여러 프로세스를 번갈아가며 실행할 수 있습니다.',
			],
			wrong: [
				'1번: 이는 공유 메모리(Shared Memory)에 대한 설명입니다.',
				'2번: CPU는 한 번에 하나의 프로세스만 실행할 수 있습니다.',
				'4번: 이는 IPC(Inter-Process Communication)에 대한 설명입니다.',
			],
		},
	},
];
