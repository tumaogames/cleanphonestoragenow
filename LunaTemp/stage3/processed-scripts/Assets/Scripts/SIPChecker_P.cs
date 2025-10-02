using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SIPChecker_P : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void EndGame()
    {
        if (GameManager.Instance.isSIP)
        {
            Debug.Log("SIP");
            StartCoroutine(GameManager.Instance.Win_P_Short());
        } else
        {
            Destroy(gameObject);
        }
    }
}
