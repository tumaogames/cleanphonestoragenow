using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    public GameObject endPanel;
    public GameObject endPanel_L;
    public bool end;
    public GameObject hand;
    public GameObject hand2;
    public GameObject arrow;
    public GameObject prompt;
    public GameObject prompt_L;
    public GameObject slideToCleanBtn_P;
    public GameObject ContinueCleaningBtn_P;
    public GameObject slideToCleanBtn_L;
    public GameObject ContinueCleaningBtn_L;
    public bool enableSound;
    public bool isSIP;
    public StartClickHandler startClickHandler;
    public enum GameState { MainMenu, Playing, Paused, GameOver }
    public GameState CurrentState { get; private set; }
    public int currentScore;
    public int CurrentScore {
        get { return currentScore; }
        set {
            currentScore = value;
        }
    }

    private void Awake()
    {
        // Singleton setup
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }
    private void Start()
    {
        ChangeState(GameState.MainMenu);
    }

    public void ShowPrompt()
    {
        if (!end && !prompt_L.activeInHierarchy)
        {
            end = true;
            prompt.SetActive(true);
            StartCoroutine(Win_P());
            slideToCleanBtn_P.SetActive(false);
            ContinueCleaningBtn_P.SetActive(true);
            AudioManager.Instance.PlaySFX("OnPop");
        }
    }

    public void ShowPrompt_L()
    {
        if (!end && !prompt_L.activeInHierarchy)
        {
            prompt_L.SetActive(true);
            StartCoroutine(Win_L());
            slideToCleanBtn_L.SetActive(false);
            ContinueCleaningBtn_L.SetActive(true);
            AudioManager.Instance.PlaySFX("OnPop");
        }
    }

    public IEnumerator Win_P()
    {
        CTAClicked();
        yield return new WaitForSeconds(3f);
        endPanel.SetActive(true);
        endPanel.GetComponent<CanvasGroupAnimator>().TriggerAnimate();
        end = true;
    }

    public IEnumerator Win_P_Short()
    {
        CTAClicked();
        yield return new WaitForSeconds(1f);
        endPanel.SetActive(true);
        endPanel.GetComponent<CanvasGroupAnimator>().TriggerAnimate();
        Debug.Log("inside p");
        end = true;
    }

    public IEnumerator Win_L_Short()
    {
        CTAClicked();
        yield return new WaitForSeconds(1f);
        endPanel_L.SetActive(true);
        endPanel_L.GetComponent<CanvasGroupAnimator>().TriggerAnimate();
        end = true;
    }

    public IEnumerator Win_L()
    {
        CTAClicked();
        yield return new WaitForSeconds(3f);
        endPanel_L.SetActive(true);
        endPanel_L.GetComponent<CanvasGroupAnimator>().TriggerAnimate();
        end = true;
    }


    private IEnumerator DestroyHandObj()
    {
        yield return new WaitForSeconds(1f);
        Destroy(hand.gameObject);
    }

    public void CTAClicked()
    {
        Luna.Unity.Playable.InstallFullGame("https://apps.apple.com/us/app/clean-phone-storage-now/id6467652964", "");
        Debug.Log("CTA Clicked");
    }

    public void ChangeState(GameState newState)
    {
        CurrentState = newState;

        switch (newState)
        {
            case GameState.MainMenu:
                Time.timeScale = 1f;
                break;
            case GameState.Playing:
                Time.timeScale = 1f;
                break;
            case GameState.Paused:
                Time.timeScale = 0f;
                break;
            case GameState.GameOver:
                Time.timeScale = 1f;
                break;
        }

        Debug.Log("Game State changed to: " + newState);
    }
    public void RestartGame()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
        ChangeState(GameState.Playing);
    }

    public void StartMusic()
    {
        AudioManager.Instance.PlayMusic("BGM");
    }
}